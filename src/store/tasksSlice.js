import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getAllTasks = createAsyncThunk(
  'tasks/getTasks',
  async () => {
    const response = axios.get('http://localhost:3001/tasks');
    return (await response).data;
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllTasks.pending, (state) => {
        state.status = 'precess';
        state.error = null;
      })
      .addCase(getAllTasks.rejected, (state) => {
        state.status = 'idle';
        state.error = 'ERROR';
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tasks = action.payload;
      })
  }
});

export { getAllTasks };

export default tasksSlice.reducer;