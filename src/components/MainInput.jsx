import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function MainInput({ tasks, deleteTask }) {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const addNewTask = useMutation({
    mutationFn: async (newTitle) => {
      const response = await fetch(`${BASE_URL}/todos/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ title: newTitle }),
      });
      if (!response.ok) {
        throw new Error("Ошибка");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setText("");
    },
  });
  const handleClick = () => {
    if (text.trim().length > 0) {
      addNewTask.mutate(text);
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
