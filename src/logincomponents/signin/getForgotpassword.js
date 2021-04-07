import { forgotPasswordicon } from "./data";
import { Link } from "react-router-dom";
import { Media } from 'reactstrap';
import React from "react";
import "./signin_&_confirmsignup.scss";
const getforgotpassword =(props)=> forgotPasswordicon.map((data,key) => {
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

export default getforgotpassword;