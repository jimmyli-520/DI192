import { useSelector } from 'react-redux';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

const TaskList = () => {
  // 1. Get the current selected date from Redux
  const selectedDay = useSelector((state) => state.planner.selectedDay);

  // 2. Get the tasks for that day (default to empty array if none exist)
  const tasks = useSelector((state) => state.planner.tasks[selectedDay] || []);

  return (
    <div className="task-list-container">
      <h2>Tasks for {selectedDay}</h2>
      
      {tasks.length === 0 ? (
        <p>No tasks for this day. Enjoy your free time!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <li 
              key={task.id} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '10px',
                borderBottom: '1px solid #eee',
                paddingBottom: '5px'
              }}
            >
              <span style={{ flexGrow: 1 }}>{task.text}</span>
              
              {/* 
                  Both components need:
                  1. task: The specific task object (contains id and text)
                  2. day: The date string to tell Redux which key to look for 
              */}
              <EditTask task={task} day={selectedDay} />
              <DeleteTask task={task} day={selectedDay} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;