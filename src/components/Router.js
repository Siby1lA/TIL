import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";
const AppRouter = (props) => {
  return (
    <Router>
      {props.isLoggedIn && <Navigation />}
      <Routes>
        {props.isLoggedIn ? (
          <>
            <Route path="/" element={<Home userObj={props.userObj} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};
export default AppRouter;
