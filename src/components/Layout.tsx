import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { MainMenu } from "./MainMenu";
import { Breadcrumbs } from "src/components/Breadcrumbs";

export const Layout = () => {
  return (
    <Container>
      <Row>
        <Col xxl={12}>
          <MainMenu />
        </Col>
        <Col xxl={12}>
          <Breadcrumbs />
        </Col>
        <Col xxl={12}>
          <Outlet />
        </Col>
        <Col xxl={12}>
          <footer></footer>
        </Col>
      </Row>
    </Container>
  );
};
