import { useState } from "react";
import Task from "./Task";
function Tasks({ sortedTasks, deleteTask, setDoneTask, setTitle }) {
  return (
    <div>
      {sortedTasks.length === 0 && <h1>Заданий нет</h1>}
      {sortedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          setDoneTask={setDoneTask}
          setTitle={setTitle}
        />
      ))}
    </div>
  );
}
export default Tasks;
