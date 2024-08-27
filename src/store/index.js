import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './tasksSlice';
import filtersReducer from './filtersSlice';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filtersReducer,
  }
});