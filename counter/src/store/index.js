import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import diffReducer from "./slices/diffSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    diff: diffReducer,
  },
});
