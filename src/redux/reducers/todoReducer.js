import {
  ADD_TODO,
  TOGGLE_TODO,
  addTodo,
  toggleTodo,
} from "../actions/todoActions";

const initialState = {
  todos: [
    { text: "Meeting at 9am", completed: true },
    { text: "Lunch at 2pm", completed: false },
  ],
};
export const todoReducer = (state = initialState, action) => {
  console.log("OK");
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index == action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
