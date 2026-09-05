import { createTaskAction } from "./redux/actions/tasksActions";
import { deleteDoneTasksAction } from "./redux/actions/deleteDoneTasksAction";

function MainInput({ dispatch, text }) {
  const handleChange = (e) => {
    dispatch({ type: "change", payload: e.target.value });
  };
  const handleClick = () => {
    if (text.trim().length > 0) {
      dispatch(createTaskAction(text));
      dispatch({ type: "zero" });
    } else if (text == "") {
      alert("Пустая строка - Напиши что нибудь");
    } else if (text == " ") {
      alert("Просто пробел - Напиши что нибудь");
    }
  };

  const handleClear = () => dispatch(deleteDoneTasksAction());
  return (
    <div>
      <input value={text} onChange={handleChange} required />

      <button onClick={handleClick}>Добавить задачу</button>
      <button onClick={handleClear}>Удалить выполненное</button>
    </div>
  );
}
export default MainInput;
