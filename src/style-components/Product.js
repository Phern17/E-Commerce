import React from 'react'
import './Product.css'

function Product({ name, price, seller, image }) {
    return (
        <div className='product col-lg-3 col-sm-5' >
            <div className="product-background-container">
                <img src={image} alt={name} className='product-image'/>
                <div className="icons-group">
                    <button className='icons-button'>
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button className='icons-button'>
                        <i className="fas fa-search"></i>
                    </button>
                    <button className='icons-button'>
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
