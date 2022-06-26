import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/action/user";
function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      email: email,
      password: password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/");
      } else {
        alert("Error");
      }
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
      <form
        onSubmit={onSubmitHandler}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler}></input>

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={onPasswordHandler}
        ></input>

        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
