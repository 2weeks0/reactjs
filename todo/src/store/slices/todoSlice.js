import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: localStorage.todoList ? JSON.parse(localStorage.todoList) : [],
  },
});

export const selectTodoList = (state) => state.todo.todoList;
export default todoSlice.reducer;