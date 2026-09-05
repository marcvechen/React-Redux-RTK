import { useState } from "react";
import Header from "./Header";
import MainInput from "./MainInput";
import ToDoList from "./ToDoList";
import Filters from "./Filters";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTask, doneTask, deleteTask } from "./redux/slices/tasksSlice";
import { useMemo } from "react";
function App() {
  const dispatch = useDispatch();
  const { value: text } = useSelector((store) => store.text);
  const { value: tasks } = useSelector((store) => store.tasks);
  const [taskFilter, setTaskFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("newest");

  useEffect(
    () => localStorage.setItem("tasks", JSON.stringify(tasks)),
    [tasks],
  );

  const setDeleteTask = (id) => {
    dispatch(deleteTask({ id }));
  };
  const setDoneTask = (id) => {
    dispatch(doneTask({ id }));
  };
  const setTitle = (id, newTitle) => {
    dispatch(changeTask({ id, newTitle }));
  };
  const countTasks = tasks.filter((item) => item.isDone === false).length;

  const sortedTasks = useMemo(() => {
    let filteredTasks;
    if (taskFilter === "active") {
      filteredTasks = tasks.filter((item) => item.isDone === false);
    } else if (taskFilter === "completed") {
      filteredTasks = tasks.filter((item) => item.isDone === true);
    } else {
      filteredTasks = tasks;
    }
    return [...filteredTasks].sort((a, b) => {
      const dateA = new Date(a.createDate).getTime();
      const dateB = new Date(b.createDate).getTime();

      if (dateFilter === "newest") {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });
  }, [tasks, taskFilter, dateFilter]);
  return (
    <div>
      <Header countTasks={countTasks} />
      <MainInput text={text} dispatch={dispatch} />
      <Filters
        taskFilter={taskFilter}
        setTaskFilter={setTaskFilter}
        setDateFilter={setDateFilter}
      />
      <ToDoList
        sortedTasks={sortedTasks}
        deleteTask={setDeleteTask}
        setDoneTask={setDoneTask}
        setTitle={setTitle}
      />
    </div>
  );
}

export default App;
