import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { authService } from "./firebase";
import { setUser } from "./redux/actions/user_action";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        //로그인됨
        navigate("/");
        dispatch(setUser(user));
      } else {
        //로그인안됨
        navigate("/login");
      }
    });
  }, []);
  if (isLoading) {
    console.log(isLoading);
    return <div>...로딩중</div>;
  } else {
    return (
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    );
  }
}

export default App;
