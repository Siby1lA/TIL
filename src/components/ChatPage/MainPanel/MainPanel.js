import React, { Component } from "react";
import MessageHeader from "./MessageHeader";
import MessageForm from "./MessageForm";
import Message from "./Message";
import { connect } from "react-redux";
import { dbService } from "../../../firebase";
import {
  child,
  off,
  onChildAdded,
  onChildRemoved,
  ref,
} from "firebase/database";
import { setUserPosts } from "../../../redux/actions/user_action";
export class MainPanel extends Component {
  messageEndRef = React.createRef();
  state = {
    messages: [],
    messagesLoading: true,
    messagesRef: ref(dbService, "message"),
    searchTerm: "",
    searchResults: [],
    searchLoading: false,
    typingRef: ref(dbService, "typing"),
    typingUsers: [],
    listenerLists: [],
  };
  componentDidMount() {
    const { chatRoom } = this.props;
    if (chatRoom) {
      this.addMessagesListener(chatRoom.id);
      this.addTypingListeners(chatRoom.id);
    }
  }
  componentWillUnmount() {
    off(this.state.messagesRef);
    this.removeListeners(this.state.listenerLists);
  }
  componentDidUpdate() {
    if (this.messageEndRef) {
      this.messageEndRef.scrollIntoView({ beforeAll: "smooth" });
    }
  }
  removeListeners = (listeners) => {
    listeners.forEach((listner) => {
      off(ref(dbService, `messages/${listner.id}`), listner.event);
    });
  };
  addTypingListeners = (chatRoomId) => {
    let typingUsers = [];
    //typing이 새로 들어올 때
    let { typingRef } = this.state;

    onChildAdded(child(typingRef, chatRoomId), (DataSnapshot) => {
      //자기 자신을 제외한 타이핑 정보 가져오기
      if (DataSnapshot.key !== this.props.user.uid) {
        typingUsers = typingUsers.concat({
          id: DataSnapshot.key,
          nickname: DataSnapshot.val(),
        });
        this.setState({ typingUsers });
      }
    });

    //listenersList state에 등록된 리스너를 넣어주기
    this.addToListenerLists(chatRoomId, this.state.typingRef, "child_added");

    //typing을 지워줄 때
    onChildRemoved(child(typingRef, chatRoomId), (DataSnapshot) => {
      const index = typingUsers.findIndex(
        (user) => user.id === DataSnapshot.key
      );
      if (index !== -1) {
        typingUsers = typingUsers.filter(
          (user) => user.id !== DataSnapshot.key
        );
        this.setState({ typingUsers });
      }
    });

    //listenersList state에 등록된 리스너를 넣어주기
    this.addToListenerLists(chatRoomId, this.state.typingRef, "child_removed");
  };
  addToListenerLists = (id, ref, event) => {
    //이미 등록된 리스너인지 확인
    const index = this.state.listenerLists.findIndex((listener) => {
      return (
        listener.id === id && listener.ref === ref && listener.event === event
      );
    });

    if (index === -1) {
      const newListener = { id, ref, event };
      this.setState({
        listenerLists: this.state.listenerLists.concat(newListener),
      });
    }
  };

  addMessagesListener = (chatRoomId) => {
    let messagesArray = [];
    let { messagesRef } = this.state;
    onChildAdded(child(messagesRef, chatRoomId), (DataSnapshot) => {
      messagesArray.push(DataSnapshot.val());
      this.setState({
        messages: messagesArray,
        messagesLoading: false,
      });
      this.userPostsCount(messagesArray);
    });
  };
  handleSearchChange = (e) => {
    this.setState(
      {
        searchTerm: e.target.value,
        searchLoading: true,
      },
      () => this.handleSearchMessages()
    );
  };
  handleSearchMessages = () => {
    const chatRoomMessages = [...this.state.messages];
    const regex = new RegExp(this.state.searchTerm, "gi");
    const searchResults = chatRoomMessages.reduce((acc, message) => {
      if (
        (message.content && message.content.match(regex)) ||
        message.user.nickname.match(regex)
      ) {
        acc.push(message);
      }
      return acc;
    }, []);
    this.setState({ searchResults });
  };
  userPostsCount = (messages) => {
    let userPosts = messages.reduce((acc, message) => {
      if (message.user.nickname in acc) {
        acc[message.user.nickname].count += 1;
      } else {
        acc[message.user.nickname] = {
          image: message.user.image,
          count: 1,
        };
      }
      return acc;
    }, {});
    this.props.dispatch(setUserPosts(userPosts));
  };
  renderTypingUsers = (typingUsers) => {
    return (
      typingUsers.length > 0 &&
      typingUsers.map((user) => (
        <span>{user?.nickname?.userUid}님이 채팅을 입력하고 있습니다...</span>
      ))
    );
  };
  render() {
    return (
      <div
        style={{
          padding: "2rem 2rem 0 2rem",
        }}
      >
        <MessageHeader handleSearchChange={this.handleSearchChange} />
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
          {this.state.searchTerm
            ? this.state.searchResults?.map((msg, idx) => (
                <Message key={idx} message={msg} user={this.props.user} />
              ))
            : this.state.messages?.map((msg, idx) => (
                <Message key={idx} message={msg} user={this.props.user} />
              ))}
          {this.renderTypingUsers(this.state.typingUsers)}
          <div ref={(node) => (this.messageEndRef = node)} />
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
