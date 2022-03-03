import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
const AppRouter = (props) => {
  return (
    <Router>
      <Routes>
        {props.isLoggedIn ? (
          <>
            <Route exact={true} path="/" element={<Home />} />
          </>
        ) : (
          <Route exact={true} path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};
export default AppRouter;
