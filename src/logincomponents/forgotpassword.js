/* eslint-disable no-unused-vars */
/* src/App.js */
import React, { Fragment, useEffect, useState, com } from "react";
import "./forgotpassword.scss";

const confirmSignedin = (props) => {
  return (
    <Fragment>
      <div className="App">
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
                className="input100"
                name="username"
                type="email"
                onChange={props.changed}
                placeholder="Enter the email address"
                onClick={props.errorclicked}
              ></input>
              </div>
            </div>
            <div className="forgotpassword-btn">
            <p className="paracolor">{props.errormessage}</p>
              <button
                className="forgotpassword-btn btn-2"
                onClick={props.resend}
              >
                <strong>confirm</strong>
              </button>
            </div>
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
        </div>
      </div>
    </Fragment>
  );
};
export default confirmSignedin;
