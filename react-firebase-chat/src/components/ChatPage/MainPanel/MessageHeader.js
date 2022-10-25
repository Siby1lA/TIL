import {
  Accordion,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { dbService } from "../../../firebase";
import { child, onValue, ref, remove, update } from "firebase/database";
function MessageHeader({ handleSearchChange }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const chatRoom = useSelector((state) => state.chatRoom.currentChatRoom);
  const isPrivateChatRoom = useSelector(
    (state) => state.chatRoom.isPrivateChatRoom
  );
  const user = useSelector((state) => state.user.currentUser);
  const userPosts = useSelector((state) => state.user.userPosts);
  const usersRef = ref(dbService, "users");
  useEffect(() => {
    if (chatRoom && user) {
      addFavoriteListener(chatRoom.id, user.uid);
    }
  }, []);
  const addFavoriteListener = (chatRoomId, userId) => {
    onValue(child(usersRef, `${userId}/favorited`), (data) => {
      if (data.val() !== null) {
        const chatRoomIds = Object.keys(data.val());
        const isAlreadyFavorited = chatRoomIds.includes(chatRoomId);
        setIsFavorited(isAlreadyFavorited);
      }
    });
  };
  const handleFavorite = () => {
    if (isFavorited) {
      setIsFavorited((prev) => !prev);
      remove(child(usersRef, `${user.uid}/favorited/${chatRoom.id}`));
    } else {
      setIsFavorited((prev) => !prev);
      update(child(usersRef, `${user.uid}/favorited`), {
        [chatRoom.id]: {
          chatRoomName: chatRoom.chatRoomName,
          description: chatRoom.description,
          createdBy: {
            nickname: chatRoom.createBy.nickname,
            image: chatRoom.createBy.image,
          },
        },
      });
    }
  };
  const renderUserPosts = (userPosts) =>
    Object.entries(userPosts)
      .sort((a, b) => b[1].count - a[1].count)
      .map(([key, val], i) => (
        <div key={i} style={{ display: "flex" }}>
          <img
            style={{ borderRadius: 25 }}
            width={48}
            height={48}
            className="mr-3"
            src={val.image}
            alt={val.nickname}
          />
          <div>
            <h6>{key}</h6>
            <p>{val.count} 개</p>
          </div>
        </div>
      ));

  return (
    <div
      style={{
        width: "100%",
        height: "190px",
        border: ".2rem solid #ececec",
        borderRadius: "4px",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h5>
              {isPrivateChatRoom ? <FaLock /> : <FaLockOpen />}
              {chatRoom && chatRoom?.chatRoomName}
              {!isPrivateChatRoom && (
                <span style={{ cursor: "pointer" }} onClick={handleFavorite}>
                  {isFavorited ? <MdFavorite /> : <MdFavoriteBorder />}
                </span>
              )}
            </h5>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <AiOutlineSearch />
              </InputGroup.Text>
              <Form.Control
                onChange={handleSearchChange}
                placeholder="메세지 검색"
                aria-label="search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <p>
            <Image
              src={chatRoom?.createBy?.image}
              style={{ width: "30px", height: "30px" }}
              roundedCircle
            />{" "}
            {chatRoom?.createBy?.nickname}
          </p>
        </div>
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>설명</Accordion.Header>
                <Accordion.Body>{chatRoom?.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>보낸 메세지 수</Accordion.Header>
                <Accordion.Body>
                  {userPosts && renderUserPosts(userPosts)}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MessageHeader;
