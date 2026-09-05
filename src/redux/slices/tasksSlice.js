import { createSlice } from "@reduxjs/toolkit";
const savedTasks = localStorage.getItem("tasks");
const initialState = {
  value:
    savedTasks !== null
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Выучить React/Redux + заработать дэнги",
            isDone: false,
            createDate: new Date().toISOString(),
          },
        ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add(state, action) {
      state.value.push({
        id: crypto.randomUUID(),
        title: action.payload,
        isDone: false,
        createDate: new Date().toISOString(),
      });
    },
    changeTask(state, action) {
      state.value = state.value.map((item) =>
        item.id == action.payload.id
          ? { ...item, title: action.payload.newTitle }
          : item,
      );
    },
    doneTask(state, action) {
      state.value = state.value.map((item) =>
        item.id == action.payload.id ? { ...item, isDone: !item.isDone } : item,
      );
    },
    deleteTask(state, action) {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    deleteDoneTasks(state) {
      state.value = state.value.filter((item) => item.isDone == false);
    },
  },
});

export const { add, changeTask, doneTask, deleteTask, deleteDoneTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
