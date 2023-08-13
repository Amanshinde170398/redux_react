import { useState } from "react";
import "../styles/App.css";
import { ToDoForm, TodoList } from "./index";

function App() {
  const [todos, setTodos] = useState([]);
  const onCreateTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };
  const onToggleTodo = (index) => {
    let list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  };
  return (
    <div className="App">
      <header className="appHeading">ToDo APP</header>
      <ToDoForm createTodo={onCreateTodo} />
      <TodoList todoList={todos} toggleTodo={onToggleTodo} />
    </div>
  );
}

export default App;
