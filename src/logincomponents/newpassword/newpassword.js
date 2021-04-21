/* eslint-disable no-unused-vars */
/* src/App.js */
import React, {Fragment, useEffect, useState} from "react";
import "../signin/signin_&_confirmsignup.scss";
import GetNewPassword from "./getNewpassword";
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
const ConfirmSignedin = (props) => {
  const [loading,updateloading]=useState(false);
  const newpassword = (e) => {
    e.preventDefault();
    updateloading(()=>true)
      return props.newpassword()
  }
  useEffect(()=>{
    if(props.errormessage){
       updateloading(()=> false)
    }
  },[props.errormessage])
  return (
    <Fragment>
      <div className="SignApp">
      <form
        autoComplete="off"
        className="wrap-input100 validate-input m-b-23"
        onSubmit={newpassword}
      >
        <div className="wrap-login100 p-r-55 p-l-55 p-b-54 p-t-65">
          <div className="center-align">
            <div>
              <span className="login100-form-title">New password</span>
              <GetNewPassword changed={props.changed} clicked={props.errorclicked}/>
              <p className="paracolor">{props.errormessage}</p>
              <div>
                <button
                  className="Signinbutton btn-2"
                  onClick={newpassword}
                >
                  Sign Up &nbsp;{ loading && (
                                < i 
                                className = "fas fa-sync fa-spin margingleft">
                            </i>)} 
                </button>
              </div>
              <span className="justcolor">
                <i className="fas fa-arrow-left" aria-hidden="true" />
              </span>
                <a className="justcolor" href="/">
                &nbsp; Back to Login
              </a>
              {props.accountVerified && (<div style={{display:"flex",textAlign:'center',marginLeft:"60px",marginTop:"20px",color:"#188B18"}}>
                  <VerifiedUserTwoToneIcon/>
	                <p>Account Verified Sucessfully</p>
	              </div>)}
            </div>
          </div>
        </div></form>
      </div>
    </Fragment>
  );
};
export default ConfirmSignedin;
