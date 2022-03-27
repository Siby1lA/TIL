import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import ToDoSelector from "./ToDoSelector";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <ToDoSelector />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
