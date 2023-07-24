import { Col } from "antd";
import { RoutesList } from "./components/routes-list/routes-list";

export const RoutesSection = () => {
  return (
    <Col span={10}>
      <RoutesList />
    </Col>
  );
};
