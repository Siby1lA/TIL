import {
  child,
  off,
  onChildAdded,
  onValue,
  push,
  ref,
  set,
} from "firebase/database";
import React, { Component } from "react";
import { Button, Modal, Form, Badge } from "react-bootstrap";
import { FaRegSmileWink, FaPlus, FaTintSlash } from "react-icons/fa";
import { connect } from "react-redux";
import { dbService } from "../../../firebase";
import {
  setCurrentChatRoom,
  setPrivateChatRoom,
} from "../../../redux/actions/chatRoom_action";
export class ChatRooms extends Component {
  state = {
    show: false,
    chatRoomName: "",
    description: "",
    chatRoomsRef: ref(dbService, "chatRooms"),
    chatRooms: [],
    firstLoad: true,
    activeChatRoomId: "",
    notifications: [],
    messagesRef: ref(dbService, "message"),
  };
  componentDidMount() {
    this.AddChatRoomsListeners();
  }
  componentWillUnmount() {
    off(this.state.chatRoomsRef);
    this.state.chatRooms.forEach((chatRoom) => {
      off(this.state.messagesRef.child(chatRoom.id));
    });
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
  addNotificationListener = (chatRoomId) => {
    let { messagesRef } = this.state;
    onValue(child(messagesRef, chatRoomId), (DataSnapshot) => {
      if (this.props.chatRoom) {
        this.handleNotification(
          chatRoomId,
          this.props.chatRoom.id,
          this.state.notifications,
          DataSnapshot
        );
      }
    });
  };
  handleNotification = (
    chatRoomIds,
    currentChatRoomId,
    notifications,
    DataSnapshot
  ) => {
    // 이미 notifications state 안에 알림 정보가 들어있는 채팅방과 그렇지 않은 채팅방을 나눠주기
    let index = notifications.findIndex(
      (notification) => notification.id === chatRoomIds
    );

    //notifications state 안에 해당 채팅방의 알림 정보가 없을 때
    if (index === -1) {
      notifications.push({
        id: chatRoomIds,
        //메시지 전체 개수
        total: DataSnapshot.size,
        //이전의 확인한 메시지 개수
        lastKnownTotal: DataSnapshot.size,
        count: 0,
      });
    }
    // 이미 해당 채팅방의 알림 정보가 있을 떄
    else {
      //상대방이 채팅 보내는 그 해당 채팅방에 있지 않을 때
      if (chatRoomIds !== currentChatRoomId) {
        //현재까지 유저가 확인한 총 메시지 개수
        let lastTotal = notifications[index].lastKnownTotal;
        console.log(1);
        //count (알림으로 보여줄 숫자)를 구하기
        //현재 총 메시지 개수 - 이전에 확인한 총 메시지 개수 > 0
        //현재 총 메시지 개수가 10개이고 이전에 확인한 메시지가 8개 였다면 2개를 알림으로 보여줘야함.
        if (DataSnapshot.size - lastTotal > 0) {
          notifications[index].count = DataSnapshot.size - lastTotal;
        }
      }
      //total property에 현재 전체 메시지 개수를 넣어주기
      notifications[index].total = DataSnapshot.size;
    }
    //이 로직의 목표는 방 하나 하나의 맞는 알림 정보를 notifications state에 넣어 주는 것
    this.setState({ notifications });
  };
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
    this.props.dispatch(setPrivateChatRoom(false));
    this.setState({ activeChatRoomId: room.id });
    this.clearNotifications();
  };
  clearNotifications = () => {
    let index = this.state.notifications.findIndex(
      (notification) => notification.id === this.props.chatRoom.id
    );
    if (index !== -1) {
      let updatedNotifications = [...this.state.notifications];
      updatedNotifications[index].lastKnownTotal =
        this.state.notifications[index].total;
      this.state.notifications[index].count = 0;
      this.setState({ notifications: updatedNotifications });
    }
  };
  getNotificationCount = (room) => {
    //해당 채팅방의 count수를 구하는 중입니다.
    let count = 0;

    this.state.notifications.forEach((notification) => {
      if (notification.id === room.id) {
        count = notification.count;
      }
    });
    if (count > 0) return count;
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
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            listStyleType: "none",
            padding: "0",
          }}
        >
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
              <Badge style={{ float: "right", marginTop: "4px" }}>
                {this.getNotificationCount(room)}
              </Badge>
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
    chatRoom: state.chatRoom.currentChatRoom,
  };
};
export default connect(mapStateToProps)(ChatRooms);
