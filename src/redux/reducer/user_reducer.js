import { SET_USER } from "../actions/types";

const init = {
  currentUser: null,
  isLoading: true,
};
export default function (state = init, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
