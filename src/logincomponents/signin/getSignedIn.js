import { SignInData, forgotPasswordicon } from "./data";
import React, { Fragment, useEffect, useState } from "react";
import "./signin.scss";
const getsignedin = (props) =>
  SignInData.map((data, key) => {
    return (
      <form
        autoComplete="off"
        className="wrap-input100 validate-input m-b-23"
        key={key}
      >
        <div>
          <div className="label-input100">{data.heading}</div>
          <div className="flexer">
            <i className={data.icon}></i>
            <input
              className="signupinput"
              type={data.type}
              name={data.name}
              onChange={props.changed}
              placeholder={data.name}
              onClick={props.clicked}
            ></input>
          </div>
        </div>
      </form>
    );
  });
export default getsignedin;
