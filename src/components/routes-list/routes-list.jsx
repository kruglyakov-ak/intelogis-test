import { Table } from "antd";
import { useDispatch } from "react-redux";

import { setPoints } from "../../store/slices/route";
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
  const dispatch = useDispatch();
  const changeRowHandler = (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
    dispatch(
      setPoints([
        { position: selectedRows[0].point1, popUpText: "Точка 1" },
        { position: selectedRows[0].point2, popUpText: "Точка 2" },
        { position: selectedRows[0].point3, popUpText: "Точка 3" },
      ])
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
