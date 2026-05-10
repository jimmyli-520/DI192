import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/planner/plannerSlice'; // ✅

const EditTask = ({ task, day }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    // 1. Validation
    if (text.trim() === '') return;

    // 2. Dispatch with the required payload structure
    dispatch(editTask({ 
      day: day, 
      id: task.id, 
      text: text 
    }));

    // 3. Exit edit mode
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            autoFocus 
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default EditTask;