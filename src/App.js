import { useRef } from "react";

const App = () => {
  const input = useRef(); //getElementById()와 같다.
  setTimeout(() => input.current.focus(), 5000);
  return (
    <div>
      <div>hi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
};
export default App;
