import { useState } from "react";

function Filters({ setTaskFilter, setDateFilter }) {
  const handleTaskFilter = (e) => {
    setTaskFilter(e.target.value);
  };
  const handleDateFilter = (e) => {
    setDateFilter(e.target.value);
  };
  return (
    <div>
      <p>Фильтрация задач</p>
      <select name="tasks" onChange={handleTaskFilter}>
        <option value="all">Все задачи</option>
        <option value="active">Активные задачи</option>
        <option value="completed">Завершённые</option>
      </select>
      <select name="date" onChange={handleDateFilter}>
        <option value="newest">Новые</option>
        <option value="oldest">Старые</option>
      </select>
    </div>
  );
}
export default Filters;
