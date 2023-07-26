import { Col, Space, Typography } from "antd";
import { useSelector } from "react-redux";

import { RoutesList } from "./components/routes-list/routes-list";
const { Text } = Typography;

export const RoutesSection = () => {
  const isLoading = useSelector(({ route }) => route.isLoading);
  const error = useSelector(({ route }) => route.error);

  return (
    <Col span={10}>
      <Space style={{width: '100%', height: "100%"}} direction="vertical">
        <RoutesList />
        {isLoading && <Text type="secondary">Идет загрузка...</Text>}
        {error && <Text type="danger">Ошибка: {error}</Text>}
      </Space>
    </Col>
  );
};
