import { useRef, useContext } from "react";
import { TaskContext } from "./TaskContext";

export function TaskInput() {
  const inputRef = useRef(null);
  const { dispatch } = useContext(TaskContext);

  const handleAdd = () => {
    dispatch({ type: "ADD_TASK", payload: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Add a task..." />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}