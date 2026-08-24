import { useState, useEffect } from "react";

import Header from "./Header";
import MainInput from "./MainInput";
import Tasks from "./ToDoList";
import Filters from "./Filters";
function ToDoPage() {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    try {
      const response = await fetch(
        "https://todo-redev.onrender.com/api/todos?page=1&limit=100",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const result = await response.json();
      const mappedTasks = result.data.map((item) => ({
        id: item.id,
        title: item.title,
        isDone: item.completed,
        createDate: item.createdAt,
      }));
      setTasks(mappedTasks);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("ok");
    }
  };
  useEffect(() => {
    getAllTasks();
  }, []);

  const [text, setText] = useState("");
  const [taskFilter, setTaskFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("newest");
  const deleteTask = async (id) => {
    try {
      const response = await fetch(
        `https://todo-redev.onrender.com/api/todos/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error("Ошибка");
      }
    } catch (error) {
      console.log(error);
    }
    setTasks((tasks) => tasks.filter((item) => item.id !== id));
  };

  const setDoneTask = async (id) => {
    try {
      const response = await fetch(
        `https://todo-redev.onrender.com/api/todos/${id}/toggle`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error("Ошибка");
      }
    } catch (error) {
      console.log(error);
    }
    setTasks((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  };
  const changeTask = async (id, newTitle) => {
    try {
      const response = await fetch(
        `https://todo-redev.onrender.com/api/todos/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({ title: newTitle }),
        },
      );
      if (!response.ok) {
        throw new Error("Ошибка");
      }

      setTasks((mappedTasks) =>
        mappedTasks.map((item) =>
          item.id === id ? { ...item, title: newTitle } : item,
        ),
      );
    } catch (error) {
      console.log(error);
    }
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
        deleteTask={deleteTask}
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
        changeTask={changeTask}
      />
    </div>
  );
}
export default ToDoPage;
