import { Col, Row } from "antd";
import { MainLayout } from "../layout/layout";
import { RoutesList } from "../routes-list/routes-list";

export const App = () => {
  return (
    <MainLayout>
      <Row style={{ height: "100%" }}>
        <Col span={10}>
          <RoutesList />
        </Col>
        <Col span={14}></Col>
      </Row>
    </MainLayout>
  );
};
