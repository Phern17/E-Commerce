import React from 'react'
import "./RegisterScreen.css"

function RegisterScreen() {
    return (
        <div className='register-screen'>
            <form className="register-form">
                <h1>CREATE AN ACCOUNT</h1>
                <div className="row register-details">
                    <div className="col-md-6">
                        <input type="text" name="lname" id="lname" placeholder='last name' className='user-particulars' />
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="fname" id="fname" placeholder='first name' className='user-particulars'/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="username" id="username" placeholder='username' className='user-particulars'/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="email" id="email" placeholder='email' className='user-particulars' />
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="password" id="password" placeholder='password' className='user-particulars' />
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="confirm-password" id="confirm-password" placeholder='confirm password' className='user-particulars' />
                    </div>
                    <p className='reminder'>By creating an account. I consent to the processing of my personal data in accordance with the <strong>PRIVACY POLICY</strong></p>
                    <button className='btn btn-dark'>CREATE</button>
                </div>
                
            </form>
        </div>
    )
}

export default RegisterScreen
