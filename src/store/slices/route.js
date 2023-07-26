import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRoute: null,
  points: [],
  routePolylinePoints: [],
  isLoading: false,
  error: null,
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
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const GET_CURRENT_ROUTE = "route/getCurrentRoute";

export const {
  getCurrentRoute,
  setRoutePoints,
  setRoutePolylinePoints,
  setIsLoading,
  setError,
} = route.actions;

export default route.reducer;
