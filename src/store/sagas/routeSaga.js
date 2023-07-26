import { put, takeLatest, select } from "redux-saga/effects";
import { CHANGE_ROUTE } from "../slices/route";
import {
  getRoutePointsApi,
  getRoutePolylinePointsApi,
} from "../../api/route/routeApi";
import {
  setRoutePoints,
  setRoutePolylinePoints,
  setIsLoading,
} from "../slices/route";

export function* changeRouteWorcker() {
  yield put(setIsLoading(true));

  const currentRoutePoints = yield select(
    ({ route }) => route.currentRoute.points
  );

  const points = yield getRoutePointsApi(currentRoutePoints);
  const adaptedPoints = points.map(({ lat, lon, display_name }) => ({
    position: [lat, lon],
    popUpText: display_name,
  }));
  const polylinePoints = yield getRoutePolylinePointsApi(adaptedPoints);

  yield put(setRoutePoints(adaptedPoints));

  yield put(setRoutePolylinePoints(polylinePoints));

  yield put(setIsLoading(false));
}

export function* routeWatcher() {
  yield takeLatest(CHANGE_ROUTE, changeRouteWorcker);
}
