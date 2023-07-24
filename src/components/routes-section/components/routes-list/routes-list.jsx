import { Table } from "antd";
import { useDispatch } from "react-redux";
import polyline from "@mapbox/polyline";
import { setPoints, setRoutPolyline } from "../../../../store/slices/route";
import { ROUTES_DATA } from "../../../../shared/constants";

const columns = [
  {
    title: "Маршрут",
    dataIndex: "rout",
  },
  {
    title: "Точка 1 (lat, lng)",
    dataIndex: "point1",
    render: ([lat, lng]) => (
      <p>
        {lat}, {lng}
      </p>
    ),
  },
  {
    title: "Точка 2 (lat, lng)",
    dataIndex: "point2",
    render: ([lat, lng]) => (
      <p>
        {lat}, {lng}
      </p>
    ),
  },
  {
    title: "Точка 3 (lat, lng)",
    dataIndex: "point3",
    render: ([lat, lng]) => (
      <p>
        {lat}, {lng}
      </p>
    ),
  },
];

export const RoutesList = () => {
  const dispatch = useDispatch();
  const changeRowHandler = async (selectedRowKeys, selectedRows) => {
    const point1 = await fetch(
      `https://nominatim.openstreetmap.org/reverse/?lat=${selectedRows[0].point1[0]}&lon=${selectedRows[0].point1[1]}&zoom=18&addressdetails=1&format=json`
    ).then((data) => data.json());
    const point2 = await fetch(
      `https://nominatim.openstreetmap.org/reverse/?lat=${selectedRows[0].point2[0]}&lon=${selectedRows[0].point2[1]}&zoom=18&addressdetails=1&format=json`
    ).then((data) => data.json());
    const point3 = await fetch(
      `https://nominatim.openstreetmap.org/reverse/?lat=${selectedRows[0].point3[0]}&lon=${selectedRows[0].point3[1]}&zoom=18&addressdetails=1&format=json`
    ).then((data) => data.json());

    const poly = await fetch(
      `https://routing.openstreetmap.de/routed-car/route/v1/driving/${[point1.lon, point1.lat]};${[point2.lon, point2.lat]};${[point3.lon, point3.lat]}?overview=full`
    ).then((data) => data.json());

    dispatch(
      setPoints([
        { position: [point1.lat, point1.lon], popUpText: point1.display_name },
        { position: [point2.lat, point2.lon], popUpText: point2.display_name },
        { position: [point3.lat, point3.lon], popUpText: point3.display_name },
      ])
    );
    dispatch(setRoutPolyline(polyline.decode(poly.routes[0].geometry)));
  };

  return (
    <Table
      rowSelection={{
        type: "radio",
        onChange: changeRowHandler,
      }}
      columns={columns}
      dataSource={ROUTES_DATA}
      pagination={{ position: [] }}
      scroll={{ x: 599, y: 800 }}
      bordered
    />
  );
};
