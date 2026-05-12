import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      { id: 1, title: 'Fix login bug',            categoryId: 1, completed: false },
      { id: 2, title: 'Buy groceries',            categoryId: 2, completed: false },
      { id: 3, title: 'Read Redux docs',          categoryId: 3, completed: false },
      { id: 4, title: 'Send weekly report',       categoryId: 1, completed: true  },
      { id: 5, title: 'Morning run',              categoryId: 2, completed: false },
    ],
  },
  reducers: {
    addTask:      (state, action) => { state.tasks.push(action.payload); },
    editTask:     (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) task.title = action.payload.title;
    },
    deleteTask:   (state, action) => { state.tasks = state.tasks.filter(t => t.id !== action.payload); },
    toggleTask:   (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;