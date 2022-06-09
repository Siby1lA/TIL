import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";

const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic2h5LXJpdmVyLTEifQ.-yP9xiFNnm8MRChHGnG7aOtRLlkCrI04qqlVOykXFdk";

const filters = { type: "messaging", members: { $in: ["shy-river-1"] } };
const sort = { last_message_at: -1 };

function Chats() {
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance("erdsebm9c3g6");

      await client.connectUser(
        {
          id: "shy-river-1",
          name: "shy-river-1",
          image:
            "https://getstream.io/random_png/?id=shy-river-1&name=shy-river-1",
        },
        userToken
      );

      setChatClient(client);
    };

    initChat();
  }, []);

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <Chat client={chatClient} theme="messaging light">
      <ChannelList filters={filters} sort={sort} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}

export default Chats;
