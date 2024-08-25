import axios from "axios";
import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const getAllTasks = createAsyncThunk(
  'tasks/getTasks',
  async () => {
    const response = axios.get('http://localhost:3001/tasks');
    return (await response).data;
  }
);

const addNewTask = createAsyncThunk(
  'tasks/newTask',
  async (title) => {
    const newTask = {
      title,
      status: 'active',
      id: nanoid(),
    };
    await axios.post('http://localhost:3001/tasks', newTask);
    return newTask;
  }
);

const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    return id;
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
      .addCase(addNewTask.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      })
  }
});

export { getAllTasks, addNewTask, deleteTask };

export default tasksSlice.reducer;