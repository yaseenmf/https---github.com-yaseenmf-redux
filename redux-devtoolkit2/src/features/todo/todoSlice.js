import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  loading: false,
  error: "",
};

const api = axios.create({
  baseURL: "https://localhost5000/todos",
});
//get
export const getAsyncTodos = createAsyncTunk(
  "todos/getAsyncTodos",
  async (_, {}) => {
    try {
      const respose = await api.get("/todos");
      return respose.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//add
export const addAsyncTodo = createAsyncTunk(
  "todos/addAsyncTodo",
  async (payload, {}) => {
    try {
      const respose = await api.post("/todos", {
        title: payload.title,
        id: Date.now(),
        completed: false,
      });
      return respose.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//delete
export const deleteAsyncTodo = createAsyncTunk(
  "todos/deleteAsyncTodo",
  async (payload, {}) => {
    try {
      await api.delete(`/todos/${payload.id}`);
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//completed or toggle
export const toggleAsyncTodo = createAsyncTunk(
  "todos/toggleAsyncTodo",
  async (payload, {}) => {
    try {
      const response = await api.patch(`/todos/${payload.id}`, {
        completed: payload.completed,
        title: payload.title,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//slices
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducer: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === Number(action.payload.id)
      );
      selectedTodo.completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== Number(action.payload.id)
      );
    },
  },
  extraReducer: {
    [getAsyncTodos.pending]: (state, action) => {
      (state.lading = true), (state.error = ""), (state.todos = []);
    },
    [getAsyncTodos.fulfilled]: (state, action) => {
      (state.lading = false),
        (state.error = ""),
        (state.todos = action.payload);
    },
    [getAsyncTodos.rejected]: (state, action) => {
      (state.lading = false),
        (state.error = action.payload),
        (state.todos = []);
    },
    //
    [addAsyncTodo.pending]: (state, action) => {
      state.lading = true;
    },
    [addAsyncTodo.fulfilled]: (state, action) => {
      (state.lading = false), state.todos.push((action.payload = []));
    },
    //
    [deleteAsyncTodo.fulfilled]: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== Number(action.payload.id)
      );
    },
    [toggleAsyncTodo.fulfilled]: (state, action) => {
      const selectedTodos = state.todos.find(
        (todo) => todo.id === Number(action.payload.id)
      );
      selectedTodos.completed = action.payload.completed;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.action;

export default todoSlice.reducer;
