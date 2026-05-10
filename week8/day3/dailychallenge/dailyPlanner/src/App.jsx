import Calendar from './components/Calendar';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>📅 Daily Planner 2026</h1>
      
      <section style={{ marginBottom: '30px', padding: '20px', background: '#f9f9f9', borderRadius: '8px' }}>
        <Calendar />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3>Add New Task</h3>
        <AddTask />
      </section>

      <hr />

      <section>
        <TaskList />
      </section>
    </div>
  );
};

export default App;