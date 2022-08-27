import React, { Component } from "react";
import MessageHeader from "./MessageHeader";
import MessageForm from "./MessageForm";
import Message from "./Message";
import { connect } from "react-redux";
import { dbService } from "../../../firebase";
import { child, onChildAdded, ref } from "firebase/database";
export class MainPanel extends Component {
  state = {
    messages: [],
    messagesLoading: true,
    messagesRef: ref(dbService, "message"),
  };
  componentDidMount() {
    const { chatRoom } = this.props;
    if (chatRoom) this.addMessagesListener(chatRoom.id);
  }
  addMessagesListener = (chatRoomId) => {
    let messagesArray = [];
    let { messagesRef } = this.state;
    onChildAdded(child(messagesRef, chatRoomId), (DataSnapshot) => {
      messagesArray.push(DataSnapshot.val());
      this.setState({
        messages: messagesArray,
        messagesLoading: false,
      });
      // this.userPostsCount(messagesArray);
    });
  };
  render() {
    return (
      <div
        style={{
          padding: "2rem 2rem 0 2rem",
        }}
      >
        <MessageHeader />
        <div
          style={{
            width: "100%",
            height: "350px",
            border: ".2rem solid #ececec ",
            borderRadius: "4px",
            padding: "1rem",
            marginBottom: "1rem",
            overflowY: "auto",
          }}
        >
          {this.state.messages?.map((msg, idx) => (
            <Message key={idx} message={msg} user={this.props.user} />
          ))}
        </div>
        <MessageForm />
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
export default connect(mapStateToProps)(MainPanel);
