function TodoItem({ todo, onDelete }) {
  return (
    <li>
      <span>{todo.id}. </span>
      <input type="checkbox" checked={todo.checked} readOnly />
      <span> {todo.text} </span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
