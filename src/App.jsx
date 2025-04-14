import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부하기", checked: false },
    { id: 2, text: "운동하기", checked: true },
    { id: 3, text: "리액트 복습하기", checked: false },
  ]);

  let lastId = todos.length + 1;

  const onInsert = (text) => {
    const newTodos = [...todos, { id: lastId, text, checked: false }];
    setTodos(newTodos);
    lastId++;
  };

  return (
    <>
      <h3>todo app</h3>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
