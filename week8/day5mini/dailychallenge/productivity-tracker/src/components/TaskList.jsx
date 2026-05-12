// src/components/TaskList.jsx
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { selectAllTasks, selectTasksByCategory } from '../selectors/selectors';
import { toggleTask, editTask, deleteTask } from '../store/tasksSlice';

const TaskList = ({ selectedCategoryId }) => {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');

  const tasks = useSelector(
    selectedCategoryId ? selectTasksByCategory(selectedCategoryId) : selectAllTasks
  );

  const handleToggle = useCallback((id) => {
    dispatch(toggleTask(id));
  }, [dispatch]);

  const handleStartEdit = useCallback((task) => {
    setEditingId(task.id);
    setEditingTitle(task.title);
  }, []);

  const handleSaveEdit = useCallback(() => {
    if (editingTitle.trim()) {
      dispatch(editTask({ id: editingId, title: editingTitle.trim() }));
    }
    setEditingId(null);
    setEditingTitle('');
  }, [dispatch, editingId, editingTitle]);

  const handleDelete = useCallback((id) => {
    dispatch(deleteTask(id));
  }, [dispatch]);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {editingId === task.id ? (
                <>
                  <input
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit()}
                  />
                  <button onClick={handleSaveEdit}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggle(task.id)}
                  />
                  <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                  </span>
                  <button onClick={() => handleStartEdit(task)}>Edit</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;