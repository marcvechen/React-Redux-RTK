import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTasks,
  deleteTask,
  setDoneTask,
  changeTask,
} from "../redux/todosSlice";
import Header from "../components/Header";
import MainInput from "../components/MainInput";
import Tasks from "../features/todos/ToDoList";
import Filters from "../features/filters/Filters";
function ToDoPage() {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const { item: tasks, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const [taskFilter, setTaskFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("newest");
  const handleRemove = (id) => {
    dispatch(deleteTask(id));
  };
  const handleSetDoneTask = (id) => {
    dispatch(setDoneTask(id));
  };
  const handlechangeTask = (id, newTitle) => {
    dispatch(changeTask({ id, newTitle }));
  };

  const countTasks = tasks.filter((item) => item.isDone === false).length;

  let filteredTasks;
  switch (taskFilter) {
    case "active":
      filteredTasks = tasks.filter((item) => !item.isDone);
      break;
    case "completed":
      filteredTasks = tasks.filter((item) => item.isDone);
      break;
    default:
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
      <MainInput handleRemove={handleRemove} />
      <Filters
        taskFilter={taskFilter}
        setTaskFilter={setTaskFilter}
        setDateFilter={setDateFilter}
      />

      <Tasks
        changeTask={handlechangeTask}
        handleRemove={handleRemove}
        sortedTasks={sortedTasks}
        setDoneTask={handleSetDoneTask}
      />
    </div>
  );
}
export default ToDoPage;
