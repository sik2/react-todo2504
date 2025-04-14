function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.checked ? "completed" : ""}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>×</button>
    </li>
  );
}

export default TodoItem;
