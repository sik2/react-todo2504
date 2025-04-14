import { useState } from "react";

function TodoForm({ onInsert }) {
  const [text, setText] = useState("");

  const onChangeSubmmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // 빈 문자열 입력 방지
    onInsert(text);
    setText(""); // 입력 후 input 초기화
  };

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={onChangeSubmmit}>
      <input
        type="text"
        value={text}
        onChange={onChangeInput}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
