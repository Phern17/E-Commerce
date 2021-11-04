import React from 'react'
import './CheckoutSummary.css'

function CheckoutSummary() {
    return (
        <div className='checkoutSummary'>
            <h1 className='summaryTitle'>Order Summary</h1>
            <div className="subtotal">
                <h4>Subtotal:</h4>
                <h4>$80</h4>
            </div>
            <div className="shippingFee">
                <h4>Estimated Shipping:</h4>
                <h4>$5.40</h4>
            </div>
            <div className="discount">
                <h4>Shipping Discount:</h4>
                <h4>-$5.40</h4>
            </div>
            <div className="finalTotal">
                <h4>Total:</h4>
                <h4>$80.00</h4>
            </div>
            <button className='btn btn-dark checkoutBtn'>
                Checkout Now
            </button>
        </div>
    )
}

export default CheckoutSummary
