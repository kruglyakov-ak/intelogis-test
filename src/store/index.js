import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rout from "./slices/route";

const sagaMiddleware = createSagaMiddleware();

function* sagas() {}

export const store = configureStore({
  devTools: true,
  reducer: {
    rout,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);
