/* 리덕스에서 관리 할 상태 정의 */

import { init } from "../state/init";

export default function (state = init, action) {
  switch (action.type) {
    case "INCREASE":
      return { ...state, counter: action.state };
    case "DECREASE":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
