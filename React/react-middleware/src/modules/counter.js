// 액션 타입 counter/~는 중복방지
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// getState를 쓰지 않는다면 굳이 파라미터로 받아올 필요 없습니다.
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
