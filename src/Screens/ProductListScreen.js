import React from "react";
import Announcement from "../style-components/Announcement";
import ProductList from "../style-components/ProductList";
import Navbar from "../style-components/Navbar";
import Newsletter from "../style-components/Newsletter";
import Footer from "../style-components/Footer";
import "./ProductListScreen.css"

function ProductListScreen() {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="container-fluid filter-container">
        <h1 className="logo">Dresses</h1>
        <div className="filters">
          <div className="filter-info-container">
            <h4>Filter Products:</h4>
            <select>
              <option value="" disabled selected>Color</option>
            </select>
            <select>
              <option value="" disabled selected>Size</option>
              <option value="">XS</option>
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
            </select>
          </div>
          <div className="filter-info-container">
            <h4>Sort Products:</h4>
            <select>
              <option>Newest</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
              <option>Trending</option>
              <option>Recommended</option>
            </select>
          </div>
          
          
        </div>
      </div>
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductListScreen;
