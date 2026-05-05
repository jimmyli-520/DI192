import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export function FilterButtons() {
  const { dispatch } = useContext(TaskContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "FILTER_TASKS", payload: "all" })}>All</button>
      <button onClick={() => dispatch({ type: "FILTER_TASKS", payload: "active" })}>Active</button>
      <button onClick={() => dispatch({ type: "FILTER_TASKS", payload: "completed" })}>Completed</button>
    </div>
  );
}