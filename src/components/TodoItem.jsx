function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li>
      <span>{todo.id}. </span>
      <input
        onClick={() => onToggle(todo.id)}
        type="checkbox"
        checked={todo.checked}
        readOnly
      />
      <span> {todo.text} </span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
