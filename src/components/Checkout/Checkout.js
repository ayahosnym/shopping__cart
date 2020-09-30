import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Forms from "./../Forms/Forms";

import "./Checkout.scss";

export default function Checkout() {
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={7}>
          <Container>
            <Forms />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
