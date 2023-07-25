import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRoute: null,
  points: [],
  routePolylinePoints: [],
};

export const route = createSlice({
  name: "route",
  initialState,
  reducers: {
    getCurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
    },
    getPoints: (state, action) => {
      state.points = action.payload;
    },
    getRoutePolylinePoints: (state, action) => {
      state.routePolylinePoints = action.payload;
    },
  },
});

export const { getCurrentRouteSuccess, getPoints, getRoutePolylinePoints } =
  route.actions;

export default route.reducer;
