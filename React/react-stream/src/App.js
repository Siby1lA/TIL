import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chats from "./Routes/Chats";
import Feed from "./Routes/Feed";
import Home from "./Routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chats" element={<Chats />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
