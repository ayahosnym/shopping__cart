import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TotalAmount from "../TotalAmount/TotalAmount";
import AllProducts from "../AllProducts/AllProducts";
import Nav from "../Nav/Nav";
import "./Home.scss";

export default function Home() {
  return (
    <section>
      <Container fluid>
        <Nav />
        <Row className="justify-content-around">
          <Col xs={12} md={8} lg={7} className="all-products-section">
            <AllProducts />
          </Col>
          <Col xs={12} md={8} lg={4} className="total-amount-section">
            <TotalAmount />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
