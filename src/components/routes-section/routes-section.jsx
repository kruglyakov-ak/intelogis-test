import { Col, Space } from "antd";
import { useSelector } from "react-redux";
import { RoutesList } from "./components/routes-list/routes-list";

export const RoutesSection = () => {
  const isLoading = useSelector((state) => state.route.isLoading);

  return (
    <Col span={10}>
      <Space direction="vertical">
        <RoutesList />

        {isLoading && "Идет загрузка..."}
      </Space>
    </Col>
  );
};
