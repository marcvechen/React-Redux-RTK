import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Header from "../components/Header";
import MainInput from "../components/MainInput";
import Tasks from "../features/todos/ToDoList";
import Filters from "../features/filters/Filters";
import { useMemo } from "react";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getAllTasks = async () => {
  const response = await fetch(`${BASE_URL}/todos?page=1&limit=100`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка");
  }
  const result = await response.json();
  return result.data.map((item) => ({
    id: item.id,
    title: item.title,
    isDone: item.completed,
    createDate: item.createdAt,
  }));
};

function ToDoPage() {
  const [taskFilter, setTaskFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("newest");
  const queryClient = useQueryClient();
  const {
    data: tasks = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getAllTasks,
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`${BASE_URL}/todos/${id}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Ошибка");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  const setDoneTask = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`${BASE_URL}/todos/${id}/toggle`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Ошибка");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  const changeTask = useMutation({
    mutationFn: async ({ id, newTitle }) => {
      const response = await fetch(`${BASE_URL}/todos/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ title: newTitle }),
      });
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  const countTasks = tasks.filter((item) => !item.isDone).length;

  const sortedTasks = useMemo(() => {
    let filtered;
    switch (taskFilter) {
      case "active":
        filtered = tasks.filter((item) => !item.isDone);
        break;
      case "completed":
        filtered = tasks.filter((item) => item.isDone);
        break;
      default:
        filtered = tasks;
    }

    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.createDate).getTime();
      const dateB = new Date(b.createDate).getTime();
      return dateFilter === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [tasks, taskFilter, dateFilter]);
  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>{error.message}</p>;
  return (
    <div>
      <Header countTasks={countTasks} />
      <MainInput tasks={tasks} deleteTask={deleteMutation.mutate} />
      <Filters
        taskFilter={taskFilter}
        setTaskFilter={setTaskFilter}
        setDateFilter={setDateFilter}
      />
      <Tasks
        sortedTasks={sortedTasks}
        deleteTask={deleteMutation.mutate}
        setDoneTask={setDoneTask.mutate}
        changeTask={(id, newTitle) => changeTask.mutate({ id, newTitle })}
      />
    </div>
  );
}

export default ToDoPage;
