import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import auth from "./hoc/auth";
function App() {
  const NewLandingPage = auth(LandingPage, null);
  const NewLoginPage = auth(LoginPage, false);
  const NewRegisterPage = auth(RegisterPage, false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewLandingPage />}></Route>
        <Route path="/login" element={<NewLoginPage />}></Route>
        <Route path="/register" element={<NewRegisterPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
