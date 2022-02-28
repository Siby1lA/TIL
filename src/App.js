import { useState } from "react";
const useInput = (init, vail) => {
  const [value, setValue] = useState(init);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let will = true;
    if (typeof vail === "function") {
      will = vail(value);
    }
    if (will) {
      setValue(value);
    }
  };
  return { value, onChange };
};
const App = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>Hello!!</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
export default App;
