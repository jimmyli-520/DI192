import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  age: 30,
  status: ''
};

// Define Thunks first so the slice can reference them
export const ageUpAsync = createAsyncThunk('age/upasync', async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return;
});

export const ageDownAsync = createAsyncThunk('age/downasync', async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return;
});

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {}, // Fixed: changed 'reducer' to 'reducers'
  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(ageUpAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.status = 'loading';
      })
      // Fulfilled
      .addCase(ageUpAsync.fulfilled, (state) => {
        state.status = 'success';
        state.age += 1;
      })
      .addCase(ageDownAsync.fulfilled, (state) => {
        state.status = 'success';
        state.age -= 1; // Fixed: Decrement age for down action
      })
      // Rejected
      .addCase(ageUpAsync.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(ageDownAsync.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default ageSlice.reducer;




