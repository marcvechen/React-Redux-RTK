import React, { useState } from "react";
import "./Style.css";
function TasksList() {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);
  const loremWords = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
  ];
  return (
    <div className="main-div">
      <h4>Список Задач</h4>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="button-div-TasksList">
        <button
          onClick={() =>
            setTasks((prevTask) => [
              ...prevTask,
              loremWords[Math.floor(Math.random() * loremWords.length)],
            ])
          }
        >
          Добавить задачу
        </button>
        <button onClick={() => setTasks((prevTask) => prevTask.slice(0, -1))}>
          Удалить последнюю задачу
        </button>
      </div>
    </div>
  );
}
export default TasksList;
