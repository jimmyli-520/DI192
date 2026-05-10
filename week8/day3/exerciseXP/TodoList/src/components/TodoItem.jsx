import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
    </div>
  );
};

export default TodoItem;