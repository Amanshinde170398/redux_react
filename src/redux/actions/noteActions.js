// Actions Name
export const ADD_NOTE = "Add Note";
export const DELETE_NOTE = "Delete Note";

// Actions creators
export const addNote = (text) => {
  return { text, type: ADD_NOTE };
};
export const deleteNote = (index) => {
  return { index, type: DELETE_NOTE };
};
