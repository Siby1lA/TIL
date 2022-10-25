import React from "react";
import moment from "moment";

function Message({ message, user }) {
  const timeFromNow = (timestamp) => moment(timestamp).fromNow();
  const isImage = (message) => {
    return (
      message.hasOwnProperty("image") && !message.hasOwnProperty("content")
    );
  };
  const isMessageMine = () => {
    if (user) {
      return message.user.id === user.uid;
    }
  };

  return (
    <div style={{ marginBottom: "3px", display: "flex" }}>
      <img
        style={{ borderRadius: "10px", marginRight: "10px" }}
        width={48}
        height={48}
        className="mr-3"
        src={message.user.image}
        alt={message.user.nickname}
      />
      <div
        style={{
          width: "100%",
          backgroundColor: isMessageMine() && "#ECECEC",
        }}
      >
        <h6>
          {message.user.nickname}{" "}
          <span style={{ fontSize: "10px", color: "gray" }}>
            {timeFromNow(message.timestamp)}
          </span>
        </h6>
        {isImage(message) ? (
          <img style={{ maxWidth: "300px" }} alt="이미지" src={message.image} />
        ) : (
          <p>{message.content}</p>
        )}
      </div>
    </div>
  );
}

export default Message;
