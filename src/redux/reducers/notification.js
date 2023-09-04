import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";

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
  // extraReducers: {
  //   "todo/add": (state, action) => {
  //     state.message = "Add todo";
  //   },
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(actions.add, (state, action) => {
  //     state.message = "Todo is created";
  //   });
  //   builder.addCase(actions.toggle, (state, action) => {
  //     state.message = "Toggle Todo";
  //   });
  // },
  extraReducers: {
    [actions.add]: (state, action) => {
      state.message = "Todo is created.";
    },
    [actions.toggle]: (state, action) => {
      state.message = "Todo is toggled.";
    },
  },
});

export const notificationReducer = notificationSlice.reducer;
export const action = notificationSlice.actions;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
