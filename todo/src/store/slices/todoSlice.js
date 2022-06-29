import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: localStorage.todoList ? JSON.parse(localStorage.todoList) : [],
    nextId: 0,
  },
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
    },
    removeTodo(state, action) {
      const idx = state.todoList.findIndex((it) => it.id === action.payload);
      state.todoList.splice(idx, 1);
    },
    setDone(state, action) {
      const idx = state.todoList.findIndex((it) => it.id === action.payload);
      state.todoList[idx].done = !state.todoList[idx].done;
    },
    plusNextId(state) {
      state.nextId++;
    }
  }
});

export const { addTodo, removeTodo, setDone, plusNextId } = todoSlice.actions;

export const selectTodoList = (state) => state.todo.todoList;
export const selectNextId = (state) => state.todo.nextId;
export default todoSlice.reducer;