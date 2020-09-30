import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Forms.scss";

export default function Forms() {
  return (
    <Form>
      <Row>
        <Col xs={12} lg={6}>
          <h3>Billing Address</h3>
          <label for="fname">
            <i className="fa fa-user"></i> Full Name
          </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="John M. Doe"
          />
          <label for="email">
            <i className="fa fa-envelope"></i> Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="john@example.com"
          />
          <label for="adr">
            <i className="fa fa-address-card-o"></i> Address
          </label>
          <input
            type="text"
            id="adr"
            name="address"
            placeholder="542 W. 15th Street"
          />
          <label for="city">
            <i className="fa fa-institution"></i> City
          </label>
          <input type="text" id="city" name="city" placeholder="New York" />

          <Row>
            <Col>
              <label for="state">State</label>
              <input type="text" id="state" name="state" placeholder="NY" />
            </Col>
            <Col>
              <label for="zip">Zip</label>
              <input type="text" id="zip" name="zip" placeholder="10001" />
            </Col>
          </Row>
        </Col>

        <Col xs={12} lg={6}>
          <h3>Payment</h3>
          <label for="fname">Accepted Cards</label>
          <div className="icon-container">
            <i className="fa fa-cc-visa"></i>
            <i className="fa fa-cc-amex"></i>
            <i className="fa fa-cc-mastercard"></i>
            <i className="fa fa-cc-discover"></i>
          </div>
          <label for="cname">Name on Card</label>
          <input
            type="text"
            id="cname"
            name="cardname"
            placeholder="John Deo"
          />
          <label for="ccnum">Credit card number</label>
          <input
            type="text"
            id="ccnum"
            name="cardnumber"
            placeholder="3333-2222-3333-4444"
          />
          <label for="expmonth">Exp Month</label>
          <input
            type="text"
            id="expmonth"
            name="expmonth"
            placeholder="September"
          />
          <Row>
            <Col xs={12} lg={6}>
              <label for="expyear">Exp Year</label>
              <input
                type="text"
                id="expyear"
                name="expyear"
                placeholder="2021"
              />
            </Col>
            <Col xs={12} lg={6}>
              <label for="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="352" />
            </Col>
          </Row>
        </Col>
      </Row>
      <label>
        <input type="checkbox" checked="checked" name="sameadr" /> Shipping
        address same as billing
      </label>
      <Button type="submit" className="text-uppercase d-block">
        {" "}
        Submit{" "}
      </Button>
    </Form>
  );
}
