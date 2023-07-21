import "./App.css";

import Todos from "./components/Todos/Todos";
import Todo from "./components/models/Todo/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
