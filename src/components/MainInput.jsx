import { useState } from "react";

function MainInput({ setTasks, tasks, deleteTask }) {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const addNewTask = async () => {
    try {
      const response = await fetch(`${BASE_URL}/todos/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ title: text }),
      });
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const result = await response.json();
      setTasks((tasks) => [
        ...tasks,
        {
          isDone: result.completed,
          createDate: result.createdAt,
        },
      ]);
      setText("");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("ok");
    }
  };
  const handleClick = () => {
    if (text.trim().length > 0) {
      addNewTask();
    } else {
      alert("Пустая строка - Напиши что нибудь");
    }
  };

  const handleClear = () => {
    tasks.filter((item) => item.isDone).forEach((item) => deleteTask(item.id));
  };
  return (
    <div>
      <input value={text} onChange={handleChange} required />

      <button onClick={handleClick}>Добавить задачу</button>
      <button onClick={handleClear}>Удалить выполненное</button>
    </div>
  );
}
export default MainInput;
