import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [changeName, setChangeName] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [init, setInit] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    setChangeName((prev) => !prev);
  };
  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          userObj={userObj}
          isLoggedIn={Boolean(userObj)}
        />
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;
