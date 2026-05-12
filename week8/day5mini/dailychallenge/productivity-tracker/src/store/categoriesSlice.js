import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [
      { id: 1, name: 'Work'     },
      { id: 2, name: 'Personal' },
      { id: 3, name: 'Learning' },
    ],
  },
  reducers: {
    addCategory:    (state, action) => { state.categories.push(action.payload); },
    editCategory:   (state, action) => {
      const cat = state.categories.find(c => c.id === action.payload.id);
      if (cat) cat.name = action.payload.name;
    },
    deleteCategory: (state, action) => { state.categories = state.categories.filter(c => c.id !== action.payload); },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;