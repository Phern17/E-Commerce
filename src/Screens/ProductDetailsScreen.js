import React from "react";
import Announcement from "../style-components/Announcement";
import Footer from "../style-components/Footer";
import Navbar from "../style-components/Navbar";
import Newsletter from "../style-components/Newsletter";
import "./ProductDetailsScreen.css";
import { allProducts } from "../data";
import ItemQuantityInput from "../style-components/ItemQuantityInput";

const ProductDetailsScreen = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="container-fluid product-details-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-details">
              <img
                src={allProducts[5].image}
                alt="denim jacket"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-details">
              <h1 className="logo product-title">{allProducts[5].name}</h1>
              <p className="product-description">
                {allProducts[5].productDescription}
              </p>
              <h1 className="product-pricing">${allProducts[5].price}</h1>
              <div className="product-variations-container row">
                <div className="col-6 product-variation">
                  <h4>Colors: </h4>
                  {allProducts[5].color.map((color) => (
                    <button
                      value={color}
                      className="color-variation-btn"
                      style={{ backgroundColor: color }}
                    ></button>
                  ))}
                </div>
                <div className="col-6 product-variation">
                  <h4>Size: </h4>
                  <select>
                    {allProducts[5].sizes.map((size) => (
                      <option value="">
                        {size.size} - {size.quantity} left
                      </option>
                    ))}
                  </select>
                </div>
                <ItemQuantityInput />
                <div className="col atc-container">
                  <button className="btn btn-outline-dark atc-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetailsScreen;
