import React, { useState } from "react";
import { authService } from "fbase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const AuthForm = () => {
  const [newAccount, setNewAccount] = useState(true);
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault(); //이거 안하면 새로고침됨 컨트롤가능캐한다
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        //login
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        {error}
      </form>

      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
    </>
  );
};

export default AuthForm;
