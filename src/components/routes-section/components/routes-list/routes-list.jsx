import { Table } from "antd";
import { useDispatch } from "react-redux";
import { ROUTES_DATA } from "../../../../shared/constants";
import { getCurrentRoute } from "../../../../store/slices/route";

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

const dataSource = ROUTES_DATA.map(({ id, title, points }) => ({
  key: id,
  rout: title,
  point1: points[0],
  point2: points[1],
  point3: points[2],
}));

export const RoutesList = () => {
  const dispatch = useDispatch();
  const changeRowHandler = async (selectedRowKeys, selectedRows) => {
    dispatch(
      getCurrentRoute(
        ROUTES_DATA.find((item) => item.id === selectedRowKeys[0])
      )
    );
    // const point1 = await fetch(
    //   `https://nominatim.openstreetmap.org/reverse/?lat=${selectedRows[0].point1[0]}&lon=${selectedRows[0].point1[1]}&zoom=18&addressdetails=1&format=json`
    // ).then((data) => data.json());
    // const point2 = await fetch(
    //   `https://nominatim.openstreetmap.org/reverse/?lat=${selectedRows[0].point2[0]}&lon=${selectedRows[0].point2[1]}&zoom=18&addressdetails=1&format=json`
    // ).then((data) => data.json());
    // const point3 = await fetch(
    //   `https://nominatim.openstreetmap.org/reverse/?lat=${selectedRows[0].point3[0]}&lon=${selectedRows[0].point3[1]}&zoom=18&addressdetails=1&format=json`
    // ).then((data) => data.json());

    // const poly = await fetch(
    //   `https://routing.openstreetmap.de/routed-car/route/v1/driving/${selectedRows[0].point1};${selectedRows[0].point2};${selectedRows[0].point3}?overview=full`
    // ).then((data) => data.json());
  };

  return (
    <Table
      rowSelection={{
        type: "radio",
        onChange: changeRowHandler,
      }}
      columns={columns}
      dataSource={dataSource}
      pagination={{ position: [] }}
      scroll={{ x: 599, y: 800 }}
      bordered
    />
  );
};
