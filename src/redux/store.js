// import * as redux from "redux";
// import { combineReducers } from "redux";
// const { configureStore } = require("@reduxjs/toolkit");
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notification";

// const result = combineReducers({
//   todoReducer,
//   noteReducer,
// });

// export const store = redux.createStore(result);
export const store = configureStore({
  reducer: { todoReducer, noteReducer, notificationReducer },
});
