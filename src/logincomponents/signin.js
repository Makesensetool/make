import React, { Fragment, useEffect, useState } from "react";
import "./signin_&_confirmsignup.scss";
import Amplify, { Auth, Hub } from "aws-amplify";
import { Link } from "react-router-dom";
import { Media } from 'reactstrap';
import { SignInData, forgotPasswordicon } from "./signinData";
const Signedin = (props) => {
  const getsignedin = SignInData.map((data, key) => {
    return (
      <form autoComplete="off" className="wrap-input100 validate-input m-b-23" key={key}>
      <div  >
        <div className="label-input100">{data.heading}</div>
        <div className="flexer">
          <i className={data.icon}></i>
          <input
            className="signupinput"
            type={data.type}
            name={data.name}
            onChange={props.changed}
            placeholder={data.name}
            onClick={props.errorclicked}
          ></input>
        </div>
      </div>
      </form>
    );
  });
  const getforgotpassword = forgotPasswordicon.map((data,key) => {
    return (
      <div className="forgotPasswordicon" key={key}>
        <Link className="justcolor" to={data.link}>
       <Media className="justflex">
          {data.heading}&nbsp;
          <span>
            <i  className={data.className} aria-hidden="true" />{" "}
          </span>
        </Media></Link>
      </div>
    );
  });
  return (
    <Fragment>
      <div className="SignApp">
        <div>
          <div className="wrap-login100 p-r-55 p-l-55 p-b-54 p-t-65">
            <div className="center-align">
              <span className="login100-form-title">Login</span>
              {getsignedin}
              <p className="paracolor">{props.errormessage}</p>
              <div className="justflex">{getforgotpassword}</div>
              <br />
                <button className="btn btn-2" onClick={props.signIn}>
                  LOGIN
                </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Signedin;
 