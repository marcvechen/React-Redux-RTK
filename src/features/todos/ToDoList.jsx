import Task from "./Task";
function Tasks({ sortedTasks, handleRemove, setDoneTask, changeTask }) {
  return (
    <div>
      {sortedTasks.length === 0 && <h1>Заданий нет</h1>}
      {sortedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleRemove={handleRemove}
          setDoneTask={setDoneTask}
          changeTask={changeTask}
        />
      ))}
    </div>
  );
}
export default Tasks;
