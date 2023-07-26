import poliline from "@mapbox/polyline";

export const getRoutePointsApi = async (points) => {
  const nominatimPoints = [];

  for (let i = 0; i < points.length; i++) {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse/?lat=${points[i][0]}&lon=${points[i][1]}&zoom=18&addressdetails=1&format=json`
    );
    const point = await response.json();
    nominatimPoints.push(point);
  }

  return nominatimPoints;
};

export const getRoutePolylinePointsApi = async (points) => {
  const pointsString = points.map(({position}) => position.slice().reverse().join()).join(";");

  const poly = await fetch(
    `https://routing.openstreetmap.de/routed-car/route/v1/driving/${pointsString}?overview=full`
  ).then((data) => data.json());

  return poliline.decode(poly.routes[0].geometry);
};
