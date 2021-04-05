/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import SignupData from "./signupData";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Media } from 'reactstrap';
import "./signup.scss";
const SignedUp = (props) => {
  const login = useSelector((state) => state.new);
  const getSignupData = () => {
    return SignupData.map((data, key) => {
      return (
        <form autoComplete="off" className="wrap-input100 validate-input m-b-23" key={key}>
        <div >
          <div>
            <div className="label-input100">{data.heading}</div>
            <div className="signupflxer">
              <input 
                className="input100"
                name={data.name}
                type={data.type}
                onChange={props.changed}
                placeholder={data.placeholder}
                onClick={props.errorclicked}
              ></input>
              <span>
                <i className={data.icon}></i>
              </span>
            </div>
          </div>
        </div>
        </form>
      );
    });
  };
  return (
    <Fragment>
      <div className="App">
        <div className="wrap-login100 p-r-55 p-l-55 p-b-54 p-t-65">
          <div className="center-align">
            <span className="signUp-title">Sign Up</span>
            <br />
            {getSignupData()}
            <p className="paracolor">{login.user}</p>
            <Media
              className="colorwithleft"
              href="https://legaltemplates.net/form/licensing-agreement/"
              target="_blank"
            >
              Terms & conditions&nbsp;
              <span>
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </span>
            </Media>
          </div>
          <br />
          <button className="signupbtn btn-2" onClick={props.signup}>
           Sign Up 
          </button>
          <br />
          <br />
          <Link className="justcolor" to={"/"}><Media
            className="justcolor"
          >
            SignIn?
          </Media></Link>
        </div>
      </div>
    </Fragment>
  );
};
export default SignedUp;
