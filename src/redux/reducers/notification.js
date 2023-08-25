import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: {
    "todo/add": (state, action) => {
      state.message = "Add todo";
    },
  },
});

export const notificationReducer = notificationSlice.reducer;
export const action = notificationSlice.actions;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
