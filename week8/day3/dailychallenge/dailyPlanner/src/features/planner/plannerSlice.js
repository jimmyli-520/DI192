import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {
    '2026-05-10': [
      { id: 1, text: 'Buy groceries' },
    ],
  },
  selectedDay: '2026-05-10',
};

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, text } = action.payload;
      if (!state.tasks[day]) {
        state.tasks[day] = [];
      }
      state.tasks[day].push({ id: Date.now(), text });
    },
    editTask: (state, action) => {
      const { day, id, text } = action.payload;
      const dayTasks = state.tasks[day];
      if (dayTasks) {
        const task = dayTasks.find(t => t.id === id);
        if (task) task.text = text;
      }
    },
    deleteTask: (state, action) => {
      const { day, id } = action.payload;
      if (state.tasks[day]) {
        state.tasks[day] = state.tasks[day].filter(t => t.id !== id);
      }
    },
    selectDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, selectDay } = plannerSlice.actions;
export default plannerSlice.reducer;