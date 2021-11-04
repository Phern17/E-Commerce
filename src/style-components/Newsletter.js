import React from 'react'
import './Newsletter.css'

function Newsletter() {
    return (
        <div className='newsletter container-fluid'>
            <h1 className='newsletter-title'>Newsletter</h1>
            <h4 className='newsletter-subtitle'>Get timely updates from your favorite products.</h4>
            <div className="newsletter-form input-group">
                <input type="text" className="form-control newsletter-input" placeholder="Your email" aria-label="User email" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-secondary newsletter-button" type="button">
                        <i className="far fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
