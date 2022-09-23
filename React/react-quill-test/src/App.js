import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function App() {
  const [text, SetText] = useState("");
  const onSubmit = (contents) => {
    console.log(contents);
  };
  const handleChange = (value) => {
    console.log(value);
    SetText(value);
  };
  return (
    <div>
      <ReactQuill
        style={{ height: "430px" }}
        theme="snow"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
