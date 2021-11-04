import React from "react";
import "./Carousel_Item.css"

function Carousel_Item({ color, img, title, subtitle, active = false }) {
  return (
    <div className={`carousel-item ${active ? "active" : ""}`} style={{background: `linear-gradient(to left, rgba(240,235,235,1) 0%, ${color} 88%)`}}>
      <div className="row" id={`${title}`}>
        <div className="col-lg-6">
          <img className="carousel-image" src={img} alt={`${title}`} />
        </div>
        <div className="col-lg-5 hero-promote">
          <h1>{title}</h1>
          <br />
          <h4>{subtitle}</h4>
          <button className="btn btn-outline-dark shop-now-btn">
            Shop now! 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel_Item;
