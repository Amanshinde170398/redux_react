import styles from "../styles/note.module.css";
// import { addNote } from "../redux/actions/noteActions";
import { useDispatch } from "react-redux";
import { actions } from "../redux/reducers/noteReducer";

const NoteForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.note.value;
    if (text) {
      // dispatch(addNote(text));
      dispatch(actions.add(text));
    }
    e.target.note.value = "";
    return;
  };
  return (
    <div className={styles.noteForm}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="note">Note</label>
          <textarea
            className="form-control"
            id="note"
            placeholder="Add your Note"
          />
        </div>
        <button type="submit" class="btn btn-success">
          Create
        </button>
      </form>
    </div>
  );
};
export default NoteForm;
