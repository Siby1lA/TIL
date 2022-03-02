const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};
const App = () => {
  const trigerNofitif = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi",
  });
  return (
    <div>
      <button onClick={trigerNofitif}>Hello</button>
    </div>
  );
};
export default App;
