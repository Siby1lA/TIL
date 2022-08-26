import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authService } from "../../firebase";
import { setUser } from "../../redux/actions/user_action";

function ChatPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogOutClick = () => {
    dispatch(setUser(null));
    authService.signOut();
  };
  return (
    <div>
      <div>채팅페이지</div>
      <div onClick={onLogOutClick}>로그아웃 </div>
    </div>
  );
}

export default ChatPage;
