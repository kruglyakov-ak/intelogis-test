import { Col, Row } from "antd";
import { MainLayout } from "../../components/layout/layout";
import { RoutesList } from "../../components/routes-list/routes-list";
import { Map } from "../../components/map/map";

export const HomePage = () => {
  return (
    <MainLayout>
      <Row style={{ height: "100%" }}>
        <Col span={10}>
          <RoutesList />
        </Col>
        <Col span={14}>
          <Map/>
        </Col>
      </Row>
    </MainLayout>
  );
};
