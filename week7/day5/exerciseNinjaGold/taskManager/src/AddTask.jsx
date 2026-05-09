import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

function AddTask() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TaskContext);

  function handleAdd() {
    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), text: text, completed: false }
    });
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default AddTask;