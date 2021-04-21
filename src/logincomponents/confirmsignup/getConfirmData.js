import "../signin/signin_&_confirmsignup.scss";
import React, { Fragment } from "react";
import { confirmSigned } from "./conformsignupdata";

const getconformedSignedin=(props)=>confirmSigned.map((data, key) => {
  
    return (
      <form
        autoComplete="off"
        className="wrap-input100 validate-input m-b-23"
        key={key}
        onSubmit={props.confirm}
      >
        <div>
          <div className="label-input100">{data.heading}</div>
          <div className="flexer">
            <span>
              <i className={data.icon}></i>
            </span>
            <input
              className="signupinput"
              name={data.name}
              onChange={props.changed}
              placeholder={data.placeholder}
              onClick={props.clicked}
            ></input>
          </div>
        </div>
      </form>
    );
  });

  export default getconformedSignedin;