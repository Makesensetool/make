/* eslint-disable no-unused-vars */
import React, {Fragment, useEffect, useState} from "react";
import GetSignedUp from "./getsignupdata";
import { Link } from "react-router-dom";
import { Media } from "reactstrap";
import "./signup.scss";

const SignedUp = (props) => {
  const [loading,updateloading]=useState(false);
  const signup = () => {
    updateloading(()=>true)
      return props.signup()
  }
  useEffect(()=>{
    if(props.errormessage){
       updateloading(()=> false)
    }
  },[props.errormessage])
  return (
    <Fragment>
      <div className="App">
        <div className="wrap-login100 p-r-55 p-l-55 p-b-54 p-t-65">
          <div className="center-align">
            <span className="signUp-title">Sign Up</span>
            <br />
            <GetSignedUp change={props.changed} clicked={props.errorclicked} />
            <p className="paracolor">{props.errormessage}</p>
            <Link
              className="colorwithleft"
              to="https://legaltemplates.net/form/licensing-agreement/"
              target="_blank"
            >
              Terms & conditions&nbsp;
              <span>
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </span>
            </Link>
          </div>
          <button className="signupbtn btn-2" onClick={signup}>
            Sign Up{ loading && (
                                < i 
                                className = "fas fa-sync fa-spin margingleft">
                            </i>)} 
          </button>
          <Link to={"/login"}>
            <Media className="link justcolor">SignIn?</Media>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
export default SignedUp;
