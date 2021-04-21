/* eslint-disable no-unused-vars */
/* src/App.js */
import React, { Fragment, useEffect, useState, com } from "react";
import "./forgotpassword.scss";


const Forgotpassword = (props) => {
  const [loading,updateloading]=useState(false);
  const resend = (e) => {
    e.preventDefault();
    updateloading(()=>true)
      return props.resend()
  }
  useEffect(()=>{
    if(props.errormessage){
       updateloading(()=> false)
    }
  },[props.errormessage])
  return (
    <Fragment>
      <div className="App">
      <form
        autoComplete="off"
        className="wrap-input100 validate-input m-b-23"
        onSubmit={props.resend}
      >
        <div className="wrap-login100 p-r-55 p-l-55 p-b-54 p-t-65">
          <div className="center-align">
            <div>
              <span className="login-form-title">Forgot Password ?</span>
              <div>
                <img className="imgicon" src="ico/forgotpasswordIcon.png"></img>
                <br />
              </div>
              <p className="parawidth">
                <strong>
                  Enter the email address associated with your account
                </strong>
              </p>
              <p className="parawidth2">
                we will email the code to reset the password.
              </p>
              <div style={{ display: "flex" }}>
                <span>
                  <i className="fa fa-envelope fa-lg fa-fw i-style"></i>
                </span>
                <input
                className="forgotpasswordinput"
                name="username"
                type="email"
                onChange={props.changed}
                placeholder="Enter the email address"
                onClick={props.errorclicked}
              ></input>
              </div>
            </div>
            <p className="paracolor">{props.errormessage}</p>
              <button
                className="forgotpassword-btn btn-2"
                onClick={resend}
              >
                <strong>confirm</strong>{ loading && (
                                < i 
                                className = "fas fa-sync fa-spin margingleft">
                            </i>)} 
              </button>
            <br />
            <div>
              <span>
                <i className="fas fa-arrow-left" aria-hidden="true" />
              </span>
              <a className="justcolor" href="/">
                &nbsp; Back to Login
              </a>
            </div>
          </div>
        </div></form>
      </div>
    </Fragment>
  );
};
export default Forgotpassword;
