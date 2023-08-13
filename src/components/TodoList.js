import styles from "../styles/todo.module.css";

const TodoList = ({ todoList, toggleTodo }) => {
  const handleToggle = (index) => {
    toggleTodo(index);
  };
  return (
    <div className={styles.todoContainer}>
      <ul className={styles.listContainer}>
        {todoList.map((todo, index) => (
          <li className={styles.todoItem} key={index}>
            <span className={styles.taskTitle}>{todo.text}</span>
            <span
              className={`btn ${todo.completed ? "btn-success" : "btn-danger"}`}
            >
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <span
              className="btn btn-warning"
              onClick={() => {
                handleToggle(index);
              }}
            >
              Toggle
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;