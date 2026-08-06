import React, { memo, useContext } from "react";
import "./Style.css";
import TaskItem from "./TaskItem";
import LanguageContext from "./LanguageContext";

const TasksList = memo(({ tasks, setTask, deleteTask }) => {
  const { dictionary, handleLanguage } = useContext(LanguageContext);

  return (
    <div className="main-div">
      <h4>{dictionary.task.taskList}</h4>
      <ul>
        {tasks.map((item) => (
          <TaskItem
            text={item.key ? dictionary.task[item.key] : item.value}
            key={item.id}
          />
        ))}
      </ul>
      <div className="button-div-TasksList">
        <button onClick={setTask}>{dictionary.task.addTask}</button>
        <button onClick={deleteTask}>{dictionary.task.removeTask}</button>
      </div>
    </div>
  );
});

export default TasksList;
