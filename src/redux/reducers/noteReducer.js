// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";
const { createSlice } = require("@reduxjs/toolkit");
const { act } = require("react-dom/test-utils");

// create reduces?
const initialState = {
  notes: [
    {
      text: "Loremasasasas ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      createdOn: new Date().toDateString(),
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      createdOn: new Date().toDateString(),
    },
  ],
};

// Reducer using toolkite
const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.notes.push({
        createdOn: new Date().getDate(),
        text: action.payload,
      });
    },
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;
export const noteSelector = (state) => state.noteReducer.notes;

// export const noteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [{ text: action.text, createdOn: "15/08/2023" }, ...state.notes],
//       };
//     case DELETE_NOTE:
//       state.notes.splice(action.index, 1);
//       return {
//         ...state,
//         notes: [...state.notes],
//       };
//     default:
//       return state;
//   }
// };
