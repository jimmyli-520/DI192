// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Step 3 — the thunk action creator
export const fetchUser = (userId) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    const data = await response.json();
    dispatch(setUser(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Step 2 — the slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setUser: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setLoading, setUser, setError } = userSlice.actions;
export default userSlice.reducer;