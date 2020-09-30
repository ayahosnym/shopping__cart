import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./TotalAmount.scss";

export default function TotalAmount() {
  // vars
  let totalPrice = 0;
  const [products, setProducts] = useState([]);
  const history = useHistory();
  // get all products  from json  to display the price later
  useEffect(() => {
    Axios.get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // sum all products price
  function getTotalPrice() {
    for (let i of products) {
      totalPrice += i.price * i.numOfUserProduct;
    }
    return totalPrice;
  }
  // to redirect the user from home to checkout page after click button
  function goToCheckout() {
    history.push("/checkout");
  }
  //
  return (
    <section>
      <h5 className="text-capitalize mb-4 total-amount-brand font-weight-bold">
        the total amount{" "}
      </h5>
      <div className="temporaryamount-shipping">
        <p>
          <span className="">temporary amount</span>
          <i>$ {getTotalPrice()}</i>
        </p>
        <p className="mb-4">
          <span>Shipping</span>
          <span>
            {" "}
            {totalPrice === 0
              ? 0
              : totalPrice > 0 && totalPrice < 250
              ? 4
              : totalPrice >= 250 && totalPrice < 400
              ? 2
              : "Free Shipping"}
          </span>
        </p>
      </div>
      <div className="final-total-price mb-4">
        <p>
          <span>Total</span>
          <span className="font-weight-bold">
            {" "}
            ${" "}
            {totalPrice > 0 && totalPrice < 250
              ? (totalPrice + 4).toFixed(2)
              : totalPrice >= 250 && totalPrice < 400
              ? (totalPrice + 2).toFixed(2)
              : totalPrice.toFixed(2)}
          </span>
        </p>
        <span> Including (VAT)</span>
      </div>
      <p className="free shipping">
        <i className="font-weight-bold text-secondary">
          " free shipping on $400 order or more !"
        </i>
      </p>
      <Button className="text-uppercase" onClick={goToCheckout}>
        {" "}
        go to checkout
      </Button>{" "}
    </section>
  );
}
