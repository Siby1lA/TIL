import { SET_CURRENT_CHAT_ROOM, SET_PRIVATE_CHAT_ROOM } from "../actions/types";

const init = {
  currentChatRoom: null,
  isPrivateChatRoom: false,
};
export default function (state = init, action) {
  switch (action.type) {
    case SET_CURRENT_CHAT_ROOM:
      return { ...state, currentChatRoom: action.payload };
    case SET_PRIVATE_CHAT_ROOM:
      return { ...state, isPrivateChatRoom: action.payload };
    default:
      return state;
  }
}
