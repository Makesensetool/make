/* eslint-disable no-unused-vars */
/* src/App.js */
import React, { Fragment, useEffect, useState, com } from "react";
import "./signin_&_confirmsignup.scss";
import { Media } from 'reactstrap';
import { confirmSigned, confirmsignupbutton } from "./newpassworddata";

const confirmSignedin = (props) => {
  const getconformedSignedin = confirmSigned.map((data,key) => {
    return (
      <form autoComplete="off" className="wrap-input100 validate-input m-b-23" key={key}>
      <div >
        <div className="label-input100">{data.heading}</div>
        <div className="flexer">
          <span>
            <i className={data.icon}></i>
          </span>
          <input
            className="input100"
            name={data.name}
            onChange={props.changed}
            placeholder={data.placeholder}
            onClick={props.errorclicked}
          ></input>
        </div>
      </div>
      </form>
    );
  });
  return (
    <Fragment>
      <div className="SignApp">
        <div className="wrap-login100 p-r-55 p-l-55 p-b-54 p-t-65">
          <div className="center-align">
            <div>
              <span className="login100-form-title">New password</span>
              {getconformedSignedin}
              <p className="paracolor">{props.errormessage}</p>
              <div>
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
