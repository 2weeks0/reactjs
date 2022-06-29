import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slices/todoSlice";

export default configureStore({
  reducer: {
    todo: todoSliceReducer,
  },
});
