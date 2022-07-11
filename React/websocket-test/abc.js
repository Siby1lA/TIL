stomp.send(
  "/pub/chat/read/" + roomId + "/" + content.id,
  {},
  JSON.stringify({
    messageId: content.id,
    userId: chatUserId,
    roomCode: roomId,
    writer: content.writer,
  })
);
