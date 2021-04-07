import React, { Fragment, useEffect, useState, com } from "react";
import "../signin/signin_&_confirmsignup.scss";
import { confirmSigned} from "./newpassworddata";

const getnewpassword=(props)=>confirmSigned.map((data,key) => {
    return (
      <form autoComplete="off" className="wrap-input100 validate-input m-b-23" key={key}>
      <div >
        <div className="label-input100">{data.heading}</div>
        <div className="flexer">
          <span>
            <i className={data.icon}></i>
          </span>
          <input
            className="signupinput"
            type={data.type}
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

  export default getnewpassword;