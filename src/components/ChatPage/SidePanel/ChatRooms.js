import { async } from "@firebase/util";
import { child, push, ref, set, update } from "firebase/database";
import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaRegSmileWink, FaPlus } from "react-icons/fa";
import { connect } from "react-redux";
import { dbService } from "../../../firebase";
export class ChatRooms extends Component {
  state = {
    show: false,
    nickname: "",
    description: "",
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleSubmit = (e) => {
    e.preventDefault();
    const { nickname, description } = this.state;
    if (this.isFormValid(nickname, description)) {
      this.addChatRoom();
    }
  };

  isFormValid = (nickname, description) => nickname && description;
  addChatRoom = async () => {
    const key = push(ref(dbService, "chatRooms")).key;
    const { nickname, description } = this.state;
    const { user } = this.props;
    try {
      // await update(child(this.state.ChatRoomsRef, key), newChatRoom);
      await set(ref(dbService, `chatRooms/${key}`), {
        id: key,
        nickname: nickname,
        description: description,
        createBy: {
          nickname: user.displayName,
          image: user.photoURL,
        },
      });
      this.setState({
        nickname: "",
        description: "",
        show: false,
      });
    } catch (error) {
      alert(error);
    }
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

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>채팅방 생성하기</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>채팅방 이름</Form.Label>
                <Form.Control
                  onChange={(e) => this.setState({ nickname: e.target.value })}
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
