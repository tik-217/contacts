// react-router-dom
import { Outlet } from "react-router-dom";

// react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

// components
import { Breadcrumbs } from "src/components/Breadcrumbs";
import { MainMenu } from "src/components/MainMenu";

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
