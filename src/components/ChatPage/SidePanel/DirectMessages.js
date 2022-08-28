import React, { Component } from "react";
import { connect } from "react-redux";
import { FaRegSmile } from "react-icons/fa";
import { dbService } from "../../../firebase";
import { onChildAdded, ref } from "firebase/database";
import {
  setCurrentChatRoom,
  setPrivateChatRoom,
} from "../../../redux/actions/chatRoom_action";
export class DirectMessages extends Component {
  state = {
    usersRef: ref(dbService, "users"),
    users: [],
    activeChatRoom: "",
  };
  componentDidMount() {
    if (this.props.user) {
      this.addUsersListeners(this.props.user.uid);
    }
  }
  addUsersListeners = (currentUserId) => {
    let usersArray = [];
    onChildAdded(this.state.usersRef, (DataSnapshot) => {
      if (currentUserId !== DataSnapshot.key) {
        let user = DataSnapshot.val();
        user["uid"] = DataSnapshot.key;
        user["status"] = "offline";
        usersArray.push(user);
        this.setState({ users: usersArray });
      }
    });
  };
  renderDirectMessages = () => {};
  changeChatRoom = (user) => {
    const chatRoomId = this.getChatRoomId(user.uid);
    const chatRoomData = {
      id: chatRoomId,
      chatRoomName: user.nickname,
    };
    this.props.dispatch(setCurrentChatRoom(chatRoomData));
    this.props.dispatch(setPrivateChatRoom(true));

    this.setState({ activeChatRoom: user.uid });
  };
  getChatRoomId = (userId) => {
    const currentUserId = this.props.user.uid;
    return userId > currentUserId
      ? `${userId}/${currentUserId}`
      : `${currentUserId}/${userId}`;
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <span style={{ display: "flex", alignItems: "center" }}>
          <FaRegSmile style={{ marginRight: 3 }} /> 다이렉트 메세지(
          {users.length})
        </span>

        <ul style={{ listStyleType: "none", padding: 0 }}>
          {users.length > 0 &&
            users.map((user) => (
              <li
                key={user.uid}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    user.uid === this.state.activeChatRoom && "#ffffff45",
                }}
                onClick={() => this.changeChatRoom(user)}
              >
                # {user.nickname}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser,
  };
};
export default connect(mapStateToProps)(DirectMessages);
