import { configureStore, combineReducers } from "@reduxjs/toolkit";
import inputTextReducer from "./slices/inputTextSlice";
import tasksSlice from "./slices/tasksSlice";
const store = configureStore({
  reducer: combineReducers({
    text: inputTextReducer,
    tasks: tasksSlice,
  }),
});

export default store;
