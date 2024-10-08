// react-router-dom
import { Outlet, useLocation } from "react-router-dom";

// react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

// components
import { Breadcrumbs } from "src/components/Breadcrumbs";
import { MainMenu } from "src/components/MainMenu";

export const Layout = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);

  return (
    <Container>
      <Row>
        <Col xxl={12}>
          <MainMenu />
        </Col>
        <Col xxl={12}>
          <Breadcrumbs pathNames={pathNames} />
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
