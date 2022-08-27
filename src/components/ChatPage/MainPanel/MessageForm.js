import { useState } from "react";
import { Col, Form, ProgressBar, Row } from "react-bootstrap";
import { storageService, dbService } from "../../../firebase";
import { ref, set, remove, push, child } from "firebase/database";
import { useSelector } from "react-redux";
function MessageForm() {
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesRef = ref(dbService, "message");
  const user = useSelector((state) => state.user.currentUser);
  const chatRoom = useSelector((state) => state.chatRoom.currentChatRoom);
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = async () => {
    if (!content) {
      setErrors((prev) => prev.concat("내용을 입력해주세요..."));
      return;
    }
    setLoading(true);
    // firebase에 메세지를 저장
    try {
      //chatRoom.id 채팅방 아이디
      await set(push(child(messagesRef, chatRoom.id)), createMessage());
      // typingRef.child(chatRoom.id).child(user.uid).remove();
      // await remove(child(typingRef, `${chatRoom.id}/${user.uid}`));
      setLoading(false);
      setContent("");
      setErrors([]);
    } catch (error) {
      setErrors((prev) => prev.concat(error.message));
      setLoading(false);
      setTimeout(() => {
        setErrors([]);
      }, 5000);
    }
  };
  const createMessage = (fileUrl = null) => {
    const message = {
      timestamp: new Date(), //채팅 메시지 아이디
      user: {
        id: user.uid,
        nickname: user.displayName,
        image: user.photoURL,
      },
    };
    if (fileUrl !== null) {
      message["image"] = fileUrl;
    } else {
      message["content"] = content;
    }
    return message;
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            value={content}
            onChange={handleChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Form>
      <ProgressBar variant="warning" label="60%" now={60} />
      <div>
        {errors &&
          errors.map((errorMsg) => (
            <p style={{ color: "tomato" }} key={errorMsg}>
              {errorMsg}
            </p>
          ))}
      </div>
      <Row>
        <Col>
          <button
            onClick={handleSubmit}
            className="message-form-button"
            style={{ width: "100%" }}
          >
            전송
          </button>
        </Col>
        <Col>
          <button className="message-form-button" style={{ width: "100%" }}>
            이미지
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default MessageForm;
