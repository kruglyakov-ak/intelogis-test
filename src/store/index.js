import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import route from "./slices/route";
import { rootWatcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  devTools: true,
  reducer: {
    route,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);
