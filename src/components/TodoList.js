import styles from "../styles/todo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions/todoActions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);
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
                dispatch(toggleTodo(index));
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
