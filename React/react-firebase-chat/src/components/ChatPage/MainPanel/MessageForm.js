import { useRef, useState } from "react";
import { Col, Form, ProgressBar, Row } from "react-bootstrap";
import { dbService, storageService } from "../../../firebase";
import { ref, set, child, push, remove } from "firebase/database";
import { useSelector } from "react-redux";
import {
  uploadBytesResumable,
  ref as strRef,
  getDownloadURL,
} from "firebase/storage";
function MessageForm() {
  const inputOpenImageRef = useRef();
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const messagesRef = ref(dbService, "message");
  const user = useSelector((state) => state.user.currentUser);
  const chatRoom = useSelector((state) => state.chatRoom.currentChatRoom);
  const isPrivateChatRoom = useSelector(
    (state) => state.chatRoom.isPrivateChatRoom
  );
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
      remove(ref(dbService, `typing/${chatRoom.id}/${user.uid}`));
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
  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };
  const getPath = () => {
    if (isPrivateChatRoom) return `/message/private/${chatRoom.id}`;
    else return `/message/public`;
  };
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    const filePath = `${getPath()}/${file.name}`;
    const metadata = { contentType: file.type };
    setLoading(true);
    try {
      // 파일을 스토리지에 저장하기
      const storageRef = strRef(storageService, filePath);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPercentage(Math.floor(progress));
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          setLoading(false);
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;
            // ...
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // 스토리지에 저장이 된 후 파일 메시지 전송 (DB에 저장)
          // 저장된 파일을 다운로드 받을 수 있게 URL로 가져오기
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            set(
              push(child(messagesRef, chatRoom.id)),
              createMessage(downloadURL)
            );
            setLoading(false);
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      handleSubmit();
    }
    if (content) {
      set(ref(dbService, `typing/${chatRoom.id}/${user.uid}`), {
        userUid: user.displayName,
      });
    } else {
      remove(ref(dbService, `typing/${chatRoom.id}/${user.uid}`));
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            onKeyDown={handleKeyDown}
            value={content}
            onChange={handleChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Form>
      {!(percentage === 0 || percentage === 100) && (
        <ProgressBar
          variant="warning"
          label={`${percentage}%`}
          now={percentage}
        />
      )}

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
            disabled={loading ? true : false}
            onClick={handleSubmit}
            className="message-form-button"
            style={{ width: "100%" }}
          >
            전송
          </button>
        </Col>
        <Col>
          <button
            onClick={handleOpenImageRef}
            className="message-form-button"
            style={{ width: "100%" }}
          >
            이미지
          </button>
        </Col>
      </Row>
      <input
        style={{ display: "none" }}
        type="file"
        ref={inputOpenImageRef}
        accept="image/jpeg, image/png"
        onChange={handleUploadImage}
      />
    </div>
  );
}

export default MessageForm;
