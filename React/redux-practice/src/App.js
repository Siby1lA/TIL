import { useDispatch, useSelector } from "react-redux";
import { setDecrease, setIncrease } from "./redux/actions/CountAction";

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.Count.counter);

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => dispatch(setIncrease())}>+</button>
        <button onClick={() => dispatch(setDecrease())}>-</button>
      </div>
    </div>
  );
}

export default App;
