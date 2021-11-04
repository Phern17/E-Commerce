import React from "react";
import Product from "./Product";
import "./ProductList.css";
import { allProducts } from "../data";

function ProductList() {

  return (
    <div className="container-fluid overflow-hidden">
      <div className="product-list row justify-content-start">
        {allProducts.map((e) => (
          <Product key={e.id} name={e.name} price={e.price} seller={e.seller} image={e.image} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
