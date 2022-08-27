import { off, onChildAdded, push, ref, set } from "firebase/database";
import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaRegSmileWink, FaPlus } from "react-icons/fa";
import { connect } from "react-redux";
import { dbService } from "../../../firebase";
import { setCurrentChatRoom } from "../../../redux/actions/chatRoom_action";
export class ChatRooms extends Component {
  state = {
    show: false,
    chatRoomName: "",
    description: "",
    chatRoomsRef: ref(dbService, "chatRooms"),
    chatRooms: [],
    firstLoad: true,
    activeChatRoomId: "",
  };
  componentDidMount() {
    this.AddChatRoomsListeners();
  }
  componentWillUnmount() {
    off(this.state.chatRoomsRef);
  }
  AddChatRoomsListeners = () => {
    let chatRoomsArray = [];
    onChildAdded(this.state.chatRoomsRef, (DataSnapshot) => {
      chatRoomsArray.push(DataSnapshot.val());
      this.setState({ chatRooms: chatRoomsArray }, () =>
        this.setFirstChatRoom()
      );
      this.addNotificationListener(DataSnapshot.key);
    });
  };
  setFirstChatRoom = () => {
    if (this.state.firstLoad && this.state.chatRooms.length > 0) {
      const firstChatRoom = this.state.chatRooms[0];
      this.props.dispatch(setCurrentChatRoom(firstChatRoom));
      this.setState({ activeChatRoomId: firstChatRoom.id });
    }
    this.setState({ firstLoad: false });
  };
  addNotificationListener = (key) => {};
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleSubmit = (e) => {
    e.preventDefault();
    const { chatRoomName, description } = this.state;
    if (this.isFormValid(chatRoomName, description)) {
      this.addChatRoom();
    }
  };

  isFormValid = (chatRoomName, description) => chatRoomName && description;
  addChatRoom = async () => {
    const key = push(this.state.chatRoomsRef).key;
    const { chatRoomName, description } = this.state;
    const { user } = this.props;
    try {
      // await update(child(this.state.ChatRoomsRef, key), newChatRoom);
      await set(ref(dbService, `chatRooms/${key}`), {
        id: key,
        chatRoomName: chatRoomName,
        description: description,
        createBy: {
          nickname: user.displayName,
          image: user.photoURL,
        },
      });
      this.setState({
        chatRoomName: "",
        description: "",
        show: false,
      });
    } catch (error) {
      alert(error);
    }
  };
  changeChatRoom = (room) => {
    this.props.dispatch(setCurrentChatRoom(room));
    this.setState({ activeChatRoomId: room.id });
  };
  render() {
    return (
      <div>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaRegSmileWink style={{ marginRight: 3 }} />
          채팅방 (1)
          <FaPlus
            onClick={this.handleShow}
            style={{ position: "absolute", right: 0, cursor: "pointer" }}
          />
        </div>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {this.state.chatRooms?.map((room) => (
            <li
              style={{
                cursor: "pointer",
                backgroundColor:
                  room.id === this.state.activeChatRoomId && "#ffffff45",
              }}
              key={room.id}
              onClick={() => this.changeChatRoom(room)}
            >
              # {room.chatRoomName}
            </li>
          ))}
        </ul>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>채팅방 생성하기</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>채팅방 이름</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({ chatRoomName: e.target.value })
                  }
                  type="text"
                  placeholder="채팅방 이름"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>채팅방 설명</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                  type="text"
                  placeholder="채팅방 설명"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              취소
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              생성
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser,
  };
};
export default connect(mapStateToProps)(ChatRooms);
