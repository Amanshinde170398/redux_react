import styles from "../styles/todo.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../redux/actions/todoActions";
import { actions } from "../redux/reducers/todoReducer";
import { notificationSelector, action } from "../redux/reducers/notification";

const ToDoForm = () => {
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if (message) {
    setTimeout(() => {
      dispatch(action.reset(""));
    }, 1500);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.todo.value;
    if (text) {
      // dispatch(addTodo(text));
      dispatch(actions.add(text));
    }
    e.target.todo.value = "";

    return;
  };
  return (
    <div className={styles.formContainer}>
      {message && (
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="add-todo">Todo</label>
          <input
            type="text"
            className="form-control"
            id="todo"
            placeholder="Add your Item"
          />
        </div>
        <button type="submit" class="btn btn-success">
          Create
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
