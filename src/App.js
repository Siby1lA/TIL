import { useRef } from "react";

const useFullScreen = (callBack) => {
  const element = useRef();
  const runCallBack = (isFull) => {
    if (callBack && typeof callBack === "function") {
      callBack(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCallBack(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callBack && typeof callBack === "function") {
      runCallBack(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFull = (isFull) => {
    console.log(isFull ? "We are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFull);
  return (
    <div>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={triggerFull}>Make fullscreen</button>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
    </div>
  );
};
export default App;
