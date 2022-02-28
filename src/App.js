import { useEffect, useState } from "react";

const App = () => {
  const sayHello = () => console.log("Hello");
  useEffect(() => {
    sayHello(); //useEffect(sayHello(), []);도 가능 [] == dep
  }, []);
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  return (
    <div>
      <div>hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};
export default App;
