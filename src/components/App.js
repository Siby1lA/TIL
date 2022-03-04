import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
function App() {
  const [userObj, setUserObj] = useState(null);
  const [init, setInit] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter userObj={userObj} isLoggedIn={Boolean(userObj)} />
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;
