import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
});
export const getTasks = createAsyncThunk(
  "todos/getTodos",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/todos/?page=1&limit=100`, {
        method: "GET",
        headers: getHeaders(),
      });

      const data = await response.json();
      return data.data.map((item) => ({
        id: item.id,
        title: item.title,
        isDone: item.completed,
        createDate: item.createdAt,
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const addTask = createAsyncThunk(
  "todos/addTodos",
  async (title, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/todos/`, {
        method: "POST",
        body: JSON.stringify({ title: title }),
        headers: getHeaders(),
      });
      if (!response.ok) {
        return thunkAPI.rejectWithValue("Error to add task");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const deleteTask = createAsyncThunk(
  "todos/deleteTodos",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/todos/${id}/`, {
        method: "DELETE",
        headers: getHeaders(),
      });
      if (!response.ok) {
        return thunkAPI.rejectWithValue("Error to remove task");
      }
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const setDoneTask = createAsyncThunk(
  "todos/setDoneTodos",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/todos/${id}/toggle`, {
        method: "PATCH",
        headers: getHeaders(),
      });
      if (!response.ok) {
        return thunkAPI.rejectWithValue("Error to done task");
      }

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const changeTask = createAsyncThunk(
  "todos/changeTodos",
  async ({ id, newTitle }, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: "PATCH",
        headers: getHeaders(),
        body: JSON.stringify({ title: newTitle }),
      });
      if (!response.ok) {
        return thunkAPI.rejectWithValue("Error to change task");
      }

      return { id, newTitle };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const todosSlice = createSlice({
  name: "todo",
  initialState: {
    item: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.item = action.payload;
      state.loading = false;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.item.unshift({
        id: action.payload.id,
        title: action.payload.title,
        isDone: action.payload.completed,
        createDate: action.payload.createdAt,
      });
      state.loading = false;
    });

    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
      state.loading = false;
    });

    builder.addCase(setDoneTask.fulfilled, (state, action) => {
      state.item = state.item.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item,
      );
      state.loading = false;
    });

    builder.addCase(changeTask.fulfilled, (state, action) => {
      state.item = state.item.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.newTitle }
          : item,
      );
      state.loading = false;
    });

    builder.addMatcher(
      isAnyOf(
        getTasks.pending,
        addTask.pending,
        deleteTask.pending,
        setDoneTask.pending,
        changeTask.pending,
      ),
      (state) => {
        state.loading = true;
        state.error = null;
      },
    );
    builder.addMatcher(
      isAnyOf(
        getTasks.rejected,
        addTask.rejected,
        deleteTask.rejected,
        setDoneTask.rejected,
        changeTask.rejected,
      ),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    );
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
