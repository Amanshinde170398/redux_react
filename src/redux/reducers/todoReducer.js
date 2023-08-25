// import { createSlice } from "@reduxjs/toolkit";
const { createSlice } = require("@reduxjs/toolkit");
const { noteSlice } = require("./noteReducer");
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   addTodo,
//   toggleTodo,
// } from "../actions/todoActions";

const initialState = {
  todos: [
    { text: "Meeting at 9am", completed: true },
    { text: "Lunch at 2pm", completed: false },
  ],
};

// create reducer using redux toolkit
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    //this add action
    add: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    toggle: (state, action) => {
      state.todos.map((todo, index) => {
        if (index === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
export const todoSelector = (state) => state.todoReducer.todos;

// export const todoReducer = (state = initialState, action) => {
//   console.log("OK");
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, { text: action.text, completed: false }],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, index) => {
//           if (index == action.index) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       };
//     default:
//       return state;
//   }
// };
