import { useState } from "react";

function MainInput({ task, setTasks, tasks, setText, text }) {
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    if (text.trim().length > 0) {
      setTasks((tasks) => [
        ...tasks,
        {
          id: crypto.randomUUID(),
          title: text,
          isDone: false,
          createDate: new Date(),
        },
      ]);
      setText("");
    } else if (text == "") {
      alert("Пустая строка - Напиши что нибудь");
    } else if (text == " ") {
      alert("Просто пробел - Напиши что нибудь");
    }
  };

  const handleClear = () =>
    setTasks((tasks) => tasks.filter((item) => item.isDone === false));
  return (
    <div>
      <input value={text} onChange={handleChange} required />

      <button onClick={handleClick}>Добавить задачу</button>
      <button onClick={handleClear}>Удалить выполненное</button>
    </div>
  );
}
export default MainInput;
