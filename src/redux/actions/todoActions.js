// Actions
export const ADD_TODO = "ADD Todo";
export const TOGGLE_TODO = "Toggle Todo";

// Action creator
export const addTodo = (text) => ({ type: ADD_TODO, text });
export const toggleTodo = (index) => ({ type: TOGGLE_TODO, index });
