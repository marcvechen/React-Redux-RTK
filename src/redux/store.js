import { configureStore } from "@reduxjs/toolkit";
import inputTextReducer from "./slices/inputTextSlice";
import tasksSlice from "./slices/tasksSlice";
const store = configureStore({
  reducer: {
    text: inputTextReducer,
    tasks: tasksSlice,
  },
});

export default store;
