// src/components/AddTask.jsx
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/tasksSlice';
import { selectAllCategories } from '../selectors/selectors';

const AddTask = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState(1);

  const handleAdd = useCallback(() => {
    if (!title.trim()) return;
    dispatch(addTask({
      id: Date.now(),
      title: title.trim(),
      categoryId: Number(categoryId),
      completed: false,
    }));
    setTitle('');
  }, [dispatch, title, categoryId]);

  return (
    <div>
      <h2>Add Task</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        placeholder="New task..."
      />
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;