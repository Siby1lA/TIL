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
      {props.isLoggedIn && <Navigation userObj={props.userObj} />}
      <div
        style={{
          maxWidth: 890,
          width: "100%",
          margin: "0 auto",
          marginTop: 80,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Routes>
          {props.isLoggedIn ? (
            <>
              <Route path="/" element={<Home userObj={props.userObj} />} />
              <Route
                path="/profile"
                element={
                  <Profile
                    refreshUser={props.refreshUser}
                    userObj={props.userObj}
                  />
                }
              />
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Auth />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};
export default AppRouter;
