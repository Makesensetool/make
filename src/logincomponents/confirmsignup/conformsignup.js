import React, { Fragment } from "react";
import "./confirmsignup.scss";
import { useSelector, useDispatch } from "react-redux";
import { confirmSigned } from "./conformsignupdata";
import GetConfirmedSignin from "./getConfirmData";
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';

const confirmSignedin = (props) => {
  return (
    <Fragment>
      <div className="SignApp">
        <div className="wrap-login100 p-r-55 p-l-55 p-b-54 p-t-65">
          <div className="center-align">
            <div>
              <span className="login100-form-title ">Confirm SignUp</span>
              <p className="margin-bottom">Let us know that this email address belongs to you. Enter the code from the email sent to <strong className="mailcolor" >{props.user}</strong></p>
              <GetConfirmedSignin
                changed={props.changed}
                clicked={props.errorclicked}
              />
              <p className="paracolor">{props.errormessage}</p>
              <div className="backlogin">
                <a className="justcolor" href="/">
                  Back to Login ?
                </a>
              </div>
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
                {props.accountVerified && (<div style={{display:"flex",textAlign:'center',marginLeft:"60px",marginTop:"20px",color:"#188B18"}}>
                  <VerifiedUserTwoToneIcon/>
	                <p>Account Verified Sucessfully</p>
	              </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default confirmSignedin;
