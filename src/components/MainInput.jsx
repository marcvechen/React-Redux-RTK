import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/todosSlice";
function MainInput({ handleRemove }) {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const { item: tasks, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (text.trim().length > 0) {
      dispatch(addTask(text));
      setText("");
    } else {
      alert("Пустая строка - Напиши что нибудь");
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
    } else if (e.key === "Escape") {
      setText("");
    }
  };

  const handleClear = () => {
    tasks
      .filter((item) => item.isDone)
      .forEach((item) => handleRemove(item.id));
  };
  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <div>
      <input
        value={text}
        onChange={handleChange}
        onKeyDown={handleEnter}
        required
      />

      <button onClick={handleClick}>Добавить задачу</button>
      <button onClick={handleClear}>Удалить выполненное</button>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
}
export default MainInput;
