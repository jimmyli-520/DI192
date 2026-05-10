import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/planner/plannerSlice'; // ✅

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  // 1. Get the current selectedDay from the planner slice
  const selectedDay = useSelector((state) => state.planner.selectedDay);

  const handleAdd = () => {
    if (text.trim() === '') return;

    // 2. Dispatch the object structure our reducer expects: { day, text }
    dispatch(addTask({ 
      day: selectedDay, 
      text: text 
    }));

    // 3. Clear the input field
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;