import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: [],
  routPolyline: []
};

export const rout = createSlice({
  name: "rout",
  initialState,
  reducers: {
    setPoints: (state, action) => {
      state.points = action.payload;
    },
    setRoutPolyline: (state, action) => {
      state.routPolyline = action.payload;
    },
  },
});

export const { setPoints, setRoutPolyline } = rout.actions;

export default rout.reducer;
