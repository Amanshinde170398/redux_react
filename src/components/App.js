import { useState } from "react";
import "../styles/App.css";
import { ToDoForm, TodoList } from "./index";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function App() {
  return (
    <div className="App">
      <header className="appHeading">ToDo App</header>
      <Provider store={store}>
        <ToDoForm />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
