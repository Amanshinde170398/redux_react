import "../styles/App.css";
import { Home, Todo, Note } from "./index";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/todo" Component={Todo} />
        <Route exact path="/note" Component={Note} />
      </Routes>
    </div>
  );
}

export default App;
