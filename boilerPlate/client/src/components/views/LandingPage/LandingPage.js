import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res));
  }, []);
  const onLogout = () => {
    axios.get("/api/users/logout").then((response) => {
      console.log(response.data);
      if (response.data.success) navigate("/login");
      else alert("로그아웃에 실패했습니다.");
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작 페이지</h2>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
}

export default LandingPage;
