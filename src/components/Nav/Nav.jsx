import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Navbar } from "react-bootstrap";
import "./Nav.scss";

export default function Nav() {
  const [products, setProducts] = useState([]);
  let totalNumOfProuducts = 0;
  useEffect(() => {
    Axios.get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function getTotalNumOfProducts() {
    for (let i of products) {
      totalNumOfProuducts += i.numOfUserProduct;
    }
    return totalNumOfProuducts;
  }

  return (
    <Navbar
      bg="light"
      className=" d-flex justify-content-center font-weight-bold mb-5 py-4"
    >
      <i className="fas fa-shopping-cart fa-2x mr-3">
       <span className="nav-number-of-products">{getTotalNumOfProducts()} </span>
      </i>
      <Navbar.Brand >Shopping Cart</Navbar.Brand>
    </Navbar>
  );
}
