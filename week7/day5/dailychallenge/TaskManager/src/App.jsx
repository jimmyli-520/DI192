import { TaskProvider } from "./TaskContext";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";
import { FilterButtons } from "./FilterButtons";

export default function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <h1>Task Manager</h1>
        <TaskInput />
        <FilterButtons />
        <TaskList />
      </div>
    </TaskProvider>
  );
}