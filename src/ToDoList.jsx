import Task from "./Task";

function ToDoList({ sortedTasks, deleteTask, setDoneTask, setTitle }) {
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
export default ToDoList;
