import React from "react";
import Announcement from "../style-components/Announcement";
import CheckoutSummary from "../style-components/CheckoutSummary";
import Footer from "../style-components/Footer";
import Navbar from "../style-components/Navbar";
import Newsletter from "../style-components/Newsletter";
import SelectedProduct from "../style-components/SelectedProduct";
import "./ShoppingCartScreen.css";

class ShopingCartScreen extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Announcement />
        <div className="shopping-cart row">
          <h1 className="page-title">YOUR BAG</h1>
          <div className="shopping-cart-links row">
            <div className="col-md-3 btn-container">
              <button className="shopping-cart-btn btn-outline-dark">
                Continue Shopping
              </button>
            </div>
            <div className="interested-items col-md-6">
              <a href="#">Shopping Bag(2) </a>
              <a href="#">Your Wishlist(0)</a>
            </div>
            <div className="col-md-3 btn-container">
              <button className="shopping-cart-btn right-btn btn-outline-dark">
                Checkout Now
              </button>
            </div>
          </div>
          <div className="col-md-8 all-selected-products">
            <SelectedProduct
              productTitle="JESSIE THUNDER SHOE"
              id={9018301}
              color="black"
              size={37.5}
              price={30}
            />
            <SelectedProduct
              productTitle="JESSIE THUNDER SHOE"
              id={9018301}
              color="black"
              size={37.5}
              price={30}
            />
          </div>
          <div className="col-md-4 summary-container">
            <CheckoutSummary />
          </div>
        </div>

        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default ShopingCartScreen;
