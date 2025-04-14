import { useState } from "react";

function TodoForm({ onInsert }) {
  const [text, setText] = useState("");

  const onChangeSubmmit = (e) => {
    e.preventDefault(); // 기본 동작을 막음
    onInsert(text);
  };

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <form onSubmit={onChangeSubmmit}>
        <input type="text" onChange={onChangeInput} />
        <button type="submit">입력</button>
      </form>
    </>
  );
}

export default TodoForm;
