import { createAction, createSlice } from "@reduxjs/toolkit";

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
    setRoutePoints: (state, action) => {
      state.points = action.payload;
    },
    setRoutePolylinePoints: (state, action) => {
      state.routePolylinePoints = action.payload;
    },
  },
});

export const CHANGE_ROUTE = "route/changeRoute";
export const changeRoute = createAction(CHANGE_ROUTE);

export const { getCurrentRoute, setRoutePoints, setRoutePolylinePoints } =
  route.actions;

export default route.reducer;
