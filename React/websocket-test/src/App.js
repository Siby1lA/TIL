import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
const Stomp = require("stompjs");
function App() {
  let sock = new SockJS("http://43.200.61.12:3333/stomp");
  let stomp = Stomp.over(sock);

  useEffect(() => {
    // stomp.debug = null;
    stomp.connect({}, () => {
      stomp.send(
        "/pub/api/websocket/itemList",
        {},
        JSON.stringify({ itemName: "123" })
      );
      stomp.subscribe(`/sub/chat/read/`, (data) => {
        const newMessage = JSON.parse(data.body);
        console.log(newMessage);
      });
      // return () => stomp.disconnect();
    });
  }, []);

  return <div></div>;
}

export default App;
