import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/planner/plannerSlice'; // ✅

const DeleteTask = ({ task, day }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Dispatch the payload as required by your reducer: { day, id }
    dispatch(deleteTask({ 
      day: day, 
      id: task.id 
    }));
  };

  return (
    <button 
      onClick={handleDelete}
      style={{ color: 'red', marginLeft: '10px' }}
    >
      Delete
    </button>
  );
};

export default DeleteTask;