import { Row } from "antd";

import { MainLayout } from "../../components/layout/layout";
import { RoutesSection } from "../../components/routes-section/routes-section";
import { MapSection } from "../../components/map-section/map-section";

export const HomePage = () => {
  return (
    <MainLayout>
      <Row style={{ height: "100%" }}>
        <RoutesSection />
        <MapSection />
      </Row>
    </MainLayout>
  );
};
