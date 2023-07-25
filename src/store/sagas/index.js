import { all } from "redux-saga/effects";
import { routeWatcher } from "./routeSaga";

export function* rootWatcher() {
  yield all([routeWatcher()]);
}
