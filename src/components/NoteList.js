import styles from "../styles/note.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../redux/actions/noteActions";
import { actions, noteSelector } from "../redux/reducers/noteReducer";

const NoteList = () => {
  const dispatch = useDispatch();
  const notes = useSelector(noteSelector);

  return (
    <div className={styles.noteListContainer}>
      <ul>
        {notes.map((note, index) => {
          return (
            <li className={styles.noteItem} key={index}>
              <span className={styles.noteDate}>{note.createdOn}</span>
              <span className={styles.note}>{note.text}</span>
              <button
                className="btn btn-danger"
                onClick={() => {
                  // dispatch(deleteNote(index));
                  dispatch(actions.delete(index));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NoteList;
