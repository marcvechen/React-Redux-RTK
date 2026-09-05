import { useState } from "react";
import Header from "./Header";
import MainInput from "./MainInput";
import ToDoList from "./ToDoList";
import Filters from "./Filters";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTaskAction } from "./redux/actions/deleteTaskAction";
import { doneTaskAction } from "./redux/actions/doneTaskAction";
import { changeTitleAction } from "./redux/actions/changeTitleAction";
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

  const deleteTask = (id) => {
    dispatch(deleteTaskAction(id));
  };
  const setDoneTask = (id) => {
    dispatch(doneTaskAction(id));
  };
  const setTitle = (id, newTitle) => {
    dispatch(changeTitleAction(id, newTitle));
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
        deleteTask={deleteTask}
        setDoneTask={setDoneTask}
        setTitle={setTitle}
      />
    </div>
  );
}

export default App;
