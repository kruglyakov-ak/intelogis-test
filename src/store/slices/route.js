import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRoute: null,
  routePolylinePoints: [],
};

export const route = createSlice({
  name: "route",
  initialState,
  reducers: {
    getCurrentRouteSuccess: (state, action) => {
      state.currentRoute = action.payload;
    },
    getRoutePolylinePoints: (state, action) => {
      state.routePolylinePoints = action.payload;
    },
  },
});

export const { getCurrentRouteSuccess, getRoutePolylinePoints } = route.actions;

export default route.reducer;
