import styles from "../styles/todo.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

const ToDoForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.todo.value;
    if (text) dispatch(addTodo(text));
    e.target.todo.value = "";
    return;
  };
  return (
    <div className={styles.formContainer}>
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
