import axios from "axios";
import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const getAllTasks = createAsyncThunk(
  'tasks/getTasks',
  async (_, { rejectWithValue }) => {
    try {
      const response = axios.get('http://localhost:3001/tasks');
      return (await response).data;
    } catch (e) {
      return rejectWithValue('Failed to load tasks :(');
    }
  }
);

const addNewTask = createAsyncThunk(
  'tasks/newTask',
  async (title, { rejectWithValue }) => {
    const newTask = {
      title,
      completed: false,
      id: nanoid(),
    };
    try {
      await axios.post('http://localhost:3001/tasks', newTask);
      return newTask;
    } catch (e) {
      return rejectWithValue('Failed to create a new task :(');
    }
  }
);

const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue('Failed to delete task :(');
    }
  }
);

const checkTask = createAsyncThunk(
  'tasks/checkTask',
  async (id, { getState }) => {
    const task = getState().tasks.tasks.find(task => task.id === id);
    const response = axios.patch(`http://localhost:3001/tasks/${id}`, {
      completed: !task.completed
    });
    return (await response).data;
  }
);

const deleteCompletedTasks = createAsyncThunk(
  'tasks/deleteCompleted',
  async (_, { getState }) => {
    const completed = getState().tasks.tasks
      .filter(task => task.completed)
      .reduce((acc, task) => {
        acc.push(task.id);
        return acc;
      }, []);
      await completed.forEach(id => {
        axios.delete(`http://localhost:3001/tasks/${id}`);
    });
    return completed;
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
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(addNewTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      })
      .addCase(checkTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        state.tasks[index].completed = action.payload.completed;
      })
      .addCase(deleteCompletedTasks.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => !action.payload.includes(task.id));
      })
      .addMatcher((action) => action.type.endsWith('/pending'), (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addMatcher((action) => action.type.endsWith('/fulfilled'), (state) => {
        state.status = 'idle';
      })
      .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
        state.status = 'idle';
        state.error = action.payload || action.error.message;
      })
  }
});

export { getAllTasks, addNewTask, deleteTask, checkTask, deleteCompletedTasks };

export default tasksSlice.reducer;