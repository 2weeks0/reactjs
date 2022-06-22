import { createSlice } from "@reduxjs/toolkit";

const diffSlice = createSlice({
  name: "diff",
  initialState: {
    value: 1,
  },
  reducers: {
    setDiff(state, action) {
      state.value = action.payload.diff;
    },
  },
});

export const { setDiff } = diffSlice.actions;
export default diffSlice.reducer;
