// src/selectors/selectors.js
import { createSelector } from '@reduxjs/toolkit';

const selectAllTasks = (state) => state.tasks.tasks;
const selectAllCategories = (state) => state.categories.categories;

export const selectTasksByCategory = (categoryId) =>
  createSelector(
    [selectAllTasks],
    (tasks) => tasks.filter((t) => t.categoryId === categoryId)
  );

export const selectCompletedTasks = createSelector(
  [selectAllTasks],
  (tasks) => tasks.filter((t) => t.completed).length
);

export const selectCategoryById = (categoryId) =>
  createSelector(
    [selectAllCategories],
    (categories) => categories.find((c) => c.id === categoryId)
  );

export { selectAllTasks, selectAllCategories };