import React, { Fragment, useEffect, useState } from "react";
import "./signin.scss";
import GetForgotPassword from "./getForgotpassword"
import Getsigned from "./getSignedIn"
const Signedin = (props) => {
  return (
    <Fragment>
    <div className="SignApp">
      <div>
        <div className="wrap-login100 p-r-55 p-l-55 p-b-54 p-t-65">
          <div className="center-align">
            <span className="login100-form-title">Login</span>
            <Getsigned changed={props.changed} clicked={props.errorclicked}/>
            <p className="paracolor">{props.errormessage}</p>
            <div className="justflex"><GetForgotPassword/></div>
            <br />
              <button className="Signinbutton btn-2" onClick={props.signIn}>
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
 