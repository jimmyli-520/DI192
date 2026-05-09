import { useContext } from "react";
import { TaskContext } from "./TaskContext";

function TaskList() {
  const { state, dispatch } = useContext(TaskContext);

  return (
    <ul>
      {state.tasks.map(task => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
          <button onClick={() => dispatch({ type: "COMPLETE_TASK", payload: task.id })}>
            Complete
          </button>
          <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;