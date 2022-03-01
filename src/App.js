//버전업으로 인한 useEffect 문제 생김 해결법 ???
import { useEffect } from "react";
const useBeForeLeave = (onBeFore) => {
  if (typeof onBeFore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBeFore();
    }
    onBeFore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
const App = () => {
  const begForLife = () => console.log("pls dont leave");
  useBeForeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
export default App;
