import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: 'all',
  reducers: {
    getFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const { getFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
