import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    increment(state, action) {
      state.number += action.payload.diff;
    },
    decrement(state, action) {
      state.number -= action.payload.diff;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const incrementAsync =
  ({ diff }) =>
  (dispatch) => {
    setTimeout(() => {
      dispatch(increment({ diff }));
    }, 1000);
  };

  export const decrementAsync =
  ({ diff }) =>
  (dispatch) => {
    setTimeout(() => {
      dispatch(decrement({ diff }));
    }, 1000);
  };

export default counterSlice.reducer;
