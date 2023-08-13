import styles from "../styles/todo.module.css";

const ToDoForm = ({ createTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.todo.value) createTodo(e.target.todo.value);
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
