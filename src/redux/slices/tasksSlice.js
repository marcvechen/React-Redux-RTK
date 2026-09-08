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
        id: action.payload.id,
        title: action.payload.text,
        isDone: false,
        createDate: action.payload.createDate,
      });
    },
    changeTask(state, action) {
      const task = state.value.find((item) => item.id == action.payload.id);
      if (task) {
        task.title = action.payload.newTitle;
      }
    },
    doneTask(state, action) {
      const task = state.value.find((item) => item.id == action.payload.id);
      if (task) {
        task.isDone = !task.isDone;
      }
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
