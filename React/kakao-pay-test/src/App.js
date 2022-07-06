import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import PayResult from "./Routes/PayResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/payresult" element={<PayResult />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
