function TodoItem({ todo }) {
  return (
    <li>
      <span>{todo.id}. </span>
      <input type="checkbox" checked={todo.checked} />
      <span> {todo.text} </span>
      <button>❌</button>
    </li>
  );
}

export default TodoItem;
