import { ToDoForm, TodoList, Navbar } from "./index";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const Todo = () => {
  return (
    <div className="todo-container">
      <Navbar />
      <Provider store={store}>
        <ToDoForm />
        <TodoList />
      </Provider>
      ;
    </div>
  );
};
export default Todo;
