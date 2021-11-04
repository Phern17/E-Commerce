import React from "react";
import "./Carousel.css";
import Item from "./Carousel_Item";
import cosmetics from "../images/PngItem_434027.png";
import laptop from "../images/PngItem_2475803.png";
import grocery from "../images/PngItem_2413626.png";

function Carousel() {
  console.log(cosmetics)

  const createButtons = (bannerSize, i = 0, allButtons = []) => {
    if (i >= bannerSize) return allButtons;

    if (i === 0)
      allButtons.push(
        <button
          key={`${i}`}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
      );
    else
      allButtons.push(
        <button
          key={`${i}`}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={`${i}`}
          aria-label={`Slide ${i + 1}`}
        ></button>
      );

    return createButtons(bannerSize, i + 1, allButtons);
  };

  const carouselIndicators = (
    <div className="carousel-indicators">{createButtons(3)}</div>
  );

  return (
    <div className="banner container-fluid">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {carouselIndicators}
        <div className="carousel-inner">
          <Item
            color="#6190e8"
            img={cosmetics}
            title="Cosmetics Sale"
            subtitle="Don't miss this incredible sale! Big brands up to 60% off"
            active={true}
          />

          <Item
            color="#03fca5"
            img={laptop}
            title="Tech Sale"
            subtitle="Don't miss this incredible sale! Big brands up to 60% off"
          />

          <Item
            color="#fcba03"
            img={grocery}
            title="Payday Sale"
            subtitle="Don't miss this incredible sale! Big brands up to 60% off"
          />
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
