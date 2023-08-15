import { Navbar, NoteForm, NoteList } from "./index";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const Note = () => {
  return (
    <div className="note-container">
      <Navbar />
      <Provider store={store}>
        <NoteForm />
        <NoteList />
      </Provider>
    </div>
  );
};

export default Note;
