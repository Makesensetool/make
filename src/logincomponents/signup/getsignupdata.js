import React, { Fragment } from "react";
import SignupData from "./signupData";

const getSignupData =(props)=>SignupData.map((data, key) => {
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
              onChange={props.change}
              placeholder={data.placeholder}
              onClick={props.clicked}
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

  export default getSignupData;