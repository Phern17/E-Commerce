import React from "react";
import placeholderImg from "../images/PngItem_2475803.png";
import ItemQuantityInput from "./ItemQuantityInput";
import "./SelectedProduct.css";

function SelectedProduct({ productTitle, id, color, size, price }) {
  return (
    <div className="row selected-product">
      <div className="col-md-3 ">
        <img
          src={placeholderImg}
          alt="placeholder img"
          className="product-img"
        />
      </div>
      <div className="col-md-9 selected-product-details">
        <h6 className="selected-product-details-title">
          <strong>Product:</strong> {productTitle}
        </h6>
        <div className="selected-product-item">
          <h6 className="selected-product-details-title">
            <strong>ID:</strong> {id}
          </h6>
          <div className="inline-container">
            <ItemQuantityInput />
          </div>
        </div>
        <div className="selected-product-item">
          <button
            className="color-variation-btn"
            style={{ backgroundColor: color }}
          ></button>
          <h2>${price}</h2>
        </div>

        <h6 className="selected-product-details-title">
          <strong>Size:</strong> {size}{" "}
        </h6>
      </div>
      <hr />
    </div>
  );
}

export default SelectedProduct;
