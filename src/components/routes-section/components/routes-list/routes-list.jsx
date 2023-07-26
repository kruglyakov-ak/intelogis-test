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
