// src/App.jsx
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <Provider store={store}>
      <div>
        <h1>Productivity Tracker</h1>
        <CategorySelector
          selectedId={selectedCategoryId}
          onSelect={setSelectedCategoryId}
        />
        <AddTask />
        <TaskList selectedCategoryId={selectedCategoryId} />
      </div>
    </Provider>
  );
};

export default App;