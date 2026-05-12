import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';       // 👈 not ./store/tasksSlice
import categoriesReducer from './categoriesSlice'; // 👈 not ./store/categoriesReducer

export const store = configureStore({
  reducer:{
    tasks: tasksReducer,
    categories: categoriesReducer,
  },
});
