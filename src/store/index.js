import createSagaMiddleware from "redux-saga";

import { configureStore } from "@reduxjs/toolkit";
import route from "./slices/route";

const sagaMiddleware = createSagaMiddleware();

function* sagas() {}

export const store = configureStore({
  devTools: true,
  reducer: {
    route,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);
