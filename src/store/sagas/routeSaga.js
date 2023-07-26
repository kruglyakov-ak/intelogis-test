import { put, takeLatest, select } from "redux-saga/effects";
import { GET_CURRENT_ROUTE } from "../slices/route";
import {
  getRoutePointsApi,
  getRoutePolylinePointsApi,
} from "../../api/route/routeApi";
import {
  setRoutePoints,
  setRoutePolylinePoints,
  setIsLoading,
  setError,
} from "../slices/route";

export function* changeRouteWorcker() {
  yield put(setError(null));
  yield put(setIsLoading(true));

  const currentRoutePoints = yield select(
    ({ route }) => route.currentRoute.points
  );

  try {
    const points = yield getRoutePointsApi(currentRoutePoints);
    const adaptedPoints = points.map(({ lat, lon, display_name }) => ({
      position: [lat, lon],
      popUpText: display_name,
    }));
    const polylinePoints = yield getRoutePolylinePointsApi(adaptedPoints);

    yield put(setRoutePoints(adaptedPoints));

    yield put(setRoutePolylinePoints(polylinePoints));

    yield put(setIsLoading(false));
  } catch (error) {
    yield put(setIsLoading(false));
    yield put(setError(error.message));
  }
}

export function* routeWatcher() {
  yield takeLatest(GET_CURRENT_ROUTE, changeRouteWorcker);
}
