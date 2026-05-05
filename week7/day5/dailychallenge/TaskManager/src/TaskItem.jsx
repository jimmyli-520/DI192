import { useContext, useRef, useState } from "react";
import { TaskContext } from "./TaskContext";

export function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef(null);

  const handleEdit = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id: task.id, text: editRef.current.value }
    });
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
      />
      {isEditing ? (
        <>
          <input ref={editRef} defaultValue={task.text} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}