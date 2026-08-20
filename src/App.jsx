import { useState, useEffect } from "react";
import Header from "./Header";
import MainInput from "./MainInput";
import Tasks from "./ToDoList";
import Task from "./Task";
import Filters from "./Filters";
function App() {
  const savedTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(
    savedTasks !== null
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Выучить React/Redux + заработать дэнги",
            isDone: false,
            createDate: new Date(),
          },
        ],
  );
  useEffect(
    () => localStorage.setItem("tasks", JSON.stringify(tasks)),
    [tasks],
  );

  const [text, setText] = useState("");
  const [taskFilter, setTaskFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("newest");
  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((item) => item.id !== id));
  };
  const setDoneTask = (id) => {
    setTasks((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  };
  const setTitle = (id, newTitle) => {
    setTasks((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item,
      ),
    );
  };
  const countTasks = tasks.filter((item) => item.isDone === false).length;

  let filteredTasks;
  if (taskFilter === "active") {
    filteredTasks = tasks.filter((item) => item.isDone === false);
  } else if (taskFilter === "completed") {
    filteredTasks = tasks.filter((item) => item.isDone === true);
  } else {
    filteredTasks = tasks;
  }
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    const dateA = new Date(a.createDate).getTime();
    const dateB = new Date(b.createDate).getTime();
    if (dateFilter === "newest") {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });
  return (
    <div>
      <Header countTasks={countTasks} />
      <MainInput
        setTasks={setTasks}
        tasks={tasks}
        text={text}
        setText={setText}
      />
      <Filters
        taskFilter={taskFilter}
        setTaskFilter={setTaskFilter}
        setDateFilter={setDateFilter}
      />
      <Tasks
        sortedTasks={sortedTasks}
        deleteTask={deleteTask}
        setDoneTask={setDoneTask}
        text={text}
        setTitle={setTitle}
      />
    </div>
  );
}

export default App;
