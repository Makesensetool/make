/* eslint-disable no-unused-vars */
/* src/App.js */
import React, { Fragment, useEffect, useState, com } from "react";
import "../signin/signin_&_confirmsignup.scss";
import { confirmSigned, confirmsignupbutton } from "./newpassworddata";
import GetNewPassword from "./getNewpassword";
const confirmSignedin = (props) => {

  return (
    <Fragment>
      <div className="SignApp">
        <div className="wrap-login100 p-r-55 p-l-55 p-b-54 p-t-65">
          <div className="center-align">
            <div>
              <span className="login100-form-title">New password</span>
              <GetNewPassword changed={props.changed} clicked={props.errorclicked}/>
              <p className="paracolor">{props.errormessage}</p>
              <div>
                <button
                  className="Signinbutton btn-2"
                  onClick={props.newpassword}
                >
                  Sign Up
                </button>
              
              </div>
              <span className="justcolor">
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
