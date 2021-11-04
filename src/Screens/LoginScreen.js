import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="login-screen">
      <form className="login-form row">
        <h1>SIGN IN</h1>
        <div className="col-12">
            <input type="text" placeholder="username" name="login-username" id="login-username" className="user-particulars"/>
        </div>
        <div className="col-12">
            <input type="password" placeholder="password" name="login-password" id="login-password" className="user-particulars"/>
        </div>
        
        <button type="submit" className="btn btn-dark">
          Login
        </button>
        <a href="#" className="reminder">
          DO NOT REMEMBER YOUR USERNAME / PASSWORD? 
        </a> 
        <br /> 
        <a href="#" className="reminder">CREATE A NEW ACCOUNT</a>
      </form>
    </div>
  );
}

export default LoginScreen;
