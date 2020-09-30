import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import Axios from "axios";
import "./AllProducts.scss";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  // -- get all products from json  database--
  useEffect(() => {
    Axios.get("http://localhost:3000/products").then((response) => {
      setProducts(response.data);
    });
  });

  return (
    <>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            onIncrement={() => handelIncrement(product)}
            onDecrement={() => handelDecrement(product)}
          />
        );
      })}
    </>
  );
}

// fun to let user add product to the cart
function handelIncrement({ numOfUserProduct, id }) {
  numOfUserProduct++;
  Axios.patch("http://localhost:3000/products/" + id, {
    numOfUserProduct,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// fun to let user remove product from the cart

function handelDecrement({ numOfUserProduct, id }) {
  if (numOfUserProduct > 0) {
    numOfUserProduct--;
  }

  Axios.patch("http://localhost:3000/products/" + id, {
    numOfUserProduct,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
