import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const todos = [
    { id: 1, text: "리액트 공부하기", checked: false },
    { id: 2, text: "운동하기", checked: true },
    { id: 3, text: "리액트 복습하기", checked: false },
  ];

  return (
    <>
      <h3>todo app</h3>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
