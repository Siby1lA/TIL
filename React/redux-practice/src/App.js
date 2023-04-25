import { useDispatch, useSelector } from "react-redux";
import { setDecrease, setIncrease } from "./redux/actions/CountAction";

function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.Count);

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => dispatch(setIncrease(30))}>+</button>
        <button onClick={() => dispatch(setDecrease())}>-</button>
      </div>
    </div>
  );
}

export default App;
