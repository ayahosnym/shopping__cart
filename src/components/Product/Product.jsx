import React from "react";
import { Media } from "react-bootstrap";
import "./Product.scss";

export default function Product({ product, onIncrement, onDecrement }) {
  return (
    <div className="product">
      <Media key={product.id}>
        <img 
          width={160}
          height={180}
          className="mr-3"
          src={product.src}
          alt="T-shirt"
        />
        <Media.Body className="d-flex justify-content-between py-3" >
          <div className="product-description ">
            <h6  className="product-name">{product.name}</h6>
            <span>
              {" "}
              <i>size: </i> {product.size}
            </span>
            <span >
              {" "}
              <i>Color: </i> {product.color}
            </span>
            <span >
              {" "}
              <i>Condition:</i> {product.condition}
            </span>
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div className="add-remove-product d-flex justify-content-around">
              <span
                className="plus"
                onClick={() => {
                  onDecrement();
                }}
              >
                {" "}
                -
              </span>
              <span>
                {product.numOfUserProduct === 0
                  ? "Zero"
                  : product.numOfUserProduct}
              </span>
              <span
                className="minus"
                onClick={() => {
                  onIncrement();
                }}
              >
                +
              </span>
            </div>
            <p className="single-product-price text-center">
              <span>${product.price} </span>
            </p>
          </div>
        </Media.Body>
      </Media>
    </div>
  );
}
