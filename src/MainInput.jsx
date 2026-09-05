import { change, zero } from "./redux/slices/inputTextSlice";
import { add, deleteDoneTasks } from "./redux/slices/tasksSlice";
function MainInput({ dispatch, text }) {
  const handleChange = (e) => {
    dispatch(change(e.target.value));
  };
  const handleClick = () => {
    if (text.trim().length > 0) {
      dispatch(add(text));
      dispatch(zero());
    } else if (text == "") {
      alert("Пустая строка - Напиши что нибудь");
    } else if (text == " ") {
      alert("Просто пробел - Напиши что нибудь");
    }
  };

  const handleClear = () => dispatch(deleteDoneTasks());
  return (
    <div>
      <input value={text} onChange={handleChange} required />

      <button onClick={handleClick}>Добавить задачу</button>
      <button onClick={handleClear}>Удалить выполненное</button>
    </div>
  );
}
export default MainInput;
