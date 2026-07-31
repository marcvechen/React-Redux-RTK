import React, { memo } from "react";
import "./Style.css";
import TaskItem from "./TaskItem";

const TasksList = memo(({ tasks, setTask, deleteTask }) => {
  return (
    <div className="main-div">
      <h4>Список Задач</h4>
      <ul>
        {tasks.map((item) => (
          <TaskItem text={item.value} key={item.id} />
        ))}
      </ul>
      <div className="button-div-TasksList">
        <button onClick={setTask}>Добавить задачу</button>
        <button onClick={deleteTask}>Удалить последнюю задачу</button>
      </div>
    </div>
  );
});

export default TasksList;
