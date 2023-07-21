import { Table } from "antd";
import { ROUTES_DATA } from "../../shared/constants";

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
  const changeRowHandler = (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
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
