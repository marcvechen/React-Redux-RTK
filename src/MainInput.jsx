function MainInput({ setTasks, setText, text, tasks, deleteTask }) {
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const addNewTask = async () => {
    try {
      const response = await fetch(
        "https://todo-redev.onrender.com/api/todos/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({ title: text }),
        },
      );
      const result = await response.json();
      const newTask = {
        id: result.id,
        title: result.title,
        isDone: result.completed,
        createDate: result.createdAt,
      };

      setTasks((tasks) => [...tasks, newTask]);
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
    } else if (text == "") {
      alert("Пустая строка - Напиши что нибудь");
    } else if (text == " ") {
      alert("Просто пробел - Напиши что нибудь");
    }
  };

  const handleClear = () => {
    return tasks
      .filter((item) => item.isDone === true)
      .forEach((item) => deleteTask(item.id));
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
