import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/action/user";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onNameHandler = (event) => {
    setName(event.target.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const onConfrimPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword)
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    let body = {
      email: email,
      password: password,
      name: name,
    };
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) navigate("/login");
      else alert("Error");
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
        <label>Name</label>
        <input type="text" value={name} onChange={onNameHandler}></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={onPasswordHandler}
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onConfrimPasswordHandler}
        ></input>
        <br />
        <button>Join</button>
      </form>
    </div>
  );
}

export default RegisterPage;
