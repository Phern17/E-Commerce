import React from "react";
import "./Footer.css";
import paypal from '../images/paypal.png'
import mastercard from '../images/mastercard.png'
import visacard from '../images/visa-credit-card.png'
import americanExpress from '../images/payment.png'

function Footer() {
  return (
    <div className="footer container-fluid">
      <div className="row">
        <div className="col-lg-4 footer-contacts">
          <h1 className="footer-logo logo">Phern.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="footer-icons" id="footer-fb">
            <i className="fab fa-facebook fa-2x"></i>
          </button>
          <button className="footer-icons" id="footer-ig">
            <i className="fab fa-instagram fa-2x"></i>
          </button>
          <button className="footer-icons" id="footer-github">
            <i class="fab fa-github fa-2x"></i>
          </button>
        </div>
        <div className="col-lg-4">
          <div className="footer-links-container">
            <h4>Useful Links</h4>
            <div className="footer-useful-links">
              <div className="links-col">
                <a href="#" className="link-item"> Home </a>
                <a href="#" className="link-item"> Man Fashion </a>
                <a href="#" className="link-item"> Accessories </a>
                <a href="#" className="link-item"> Order Tracking </a>
                <a href="#" className="link-item"> Wishlist </a>
              </div>
              <div className="links-col">
                <a href="#" className="link-item"> Cart </a>
                <a href="#" className="link-item"> Woman Fashion </a>
                <a href="#" className="link-item"> My Account </a>
                <a href="#" className="link-item"> Terms </a>
                <a href="#" className="link-item"> Lorem Ipsum </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-info">
              <span className="info-item"><i class="fas fa-map-marker-alt"></i> 67, Lapangan Bahagia, Ipoh 31350.</span>
              <span className="info-item"><i class="fas fa-phone"></i> +60 12-4399 0512</span>
              <span className="info-item"><i class="far fa-envelope"></i> mphern17@gmail.com</span>
              <img src={mastercard} alt="mastercard icon"/>
              <img src={visacard} alt="visacard icon"/>
              <img src={paypal} alt="paypal icon"/>
              <img src={americanExpress} alt="american express icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
