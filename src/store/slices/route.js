import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: [],
};

export const rout = createSlice({
  name: "rout",
  initialState,
  reducers: {
    setPoints: (state, action) => {
      state.points = action.payload;
    },
  },
});

export const { setPoints } = rout.actions;

export default rout.reducer;
