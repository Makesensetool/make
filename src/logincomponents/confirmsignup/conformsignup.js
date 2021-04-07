/* eslint-disable no-unused-vars */
/* src/App.js */
import React, { Fragment } from "react";
import "../signin/signin_&_confirmsignup.scss";
import { confirmSigned } from "./conformsignupdata";
import GetConfirmedSignin from "./getConfirmData";
const confirmSignedin = (props) => {
  return (
    <Fragment>
      <div className="SignApp">
        <div className="wrap-login100 p-r-55 p-l-55 p-b-54 p-t-65">
          <div className="center-align">
            <div>
              <span className="login100-form-title">Confirm SignUp</span>
              <GetConfirmedSignin
                changed={props.changed}
                clicked={props.errorclicked}
              />
              <p className="paracolor">{props.errormessage}</p>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a className="justcolor" href="/">
                  Back to Login ?
                </a>
              </div>
              <div>
                <br />
                <button
                  className="conformsignup-btn btn-2"
                  onClick={props.confirmsignup}
                >
                  Sign Up
                </button>
                <button
                  className="conformsignup-btn btn-2 bywidth2"
                  onClick={props.resendConfirmationCode}
                >
                  Resend
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default confirmSignedin;
