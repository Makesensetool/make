/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import config from "./aws-exports";
import {Router,Route,Switch,Link, Redirect } from "react-router-dom";
import Amplify, { Auth, Hub } from "aws-amplify";
import history from './history';
import SignIn from "./logincomponents/signin/signin";
import SignUp from "./logincomponents/signup/signup";
import ConfirmSignUp from "./logincomponents/confirmsignup/conformsignup";
import Forgotpassword from "./logincomponents/forgotpassword/forgotpassword";
import AfterLogin from "./login";
import ErrorPage from "./error/errorPage"

import Newpassword from "./logincomponents/newpassword/newpassword";
import login from "./login";
 const nav=(props)=> {
    const checkRoute = (component) => {
        if (props.loginuser && props.loginuser.length===1002 && props.loginuser && props.loginuser.includes(".")) {
          console.log("hello vijay")
          return component;
        } else {
          window.location.href = "/login"
         console.log("component error issue")
        }
      };
  return (
    <Fragment>
      <Router  history={history}>
        <Switch>
        <Route exact path="/">
            <Redirect to="/login" />
        </Route>
        <Route path="/forgotpassword" exact>
            <Forgotpassword
              changed={props.changed}
              resend={props.resend}
              errormessage={props.errormessage}
              errorclicked={props.errorclicked}
            />
          </Route>
          <Route path="/login" exact>
            <SignIn
              changed={props.changed}
              signIn={props.signIn}
              errormessage={props.errormessage}
              errorclicked={props.errorclicked}
            />
          </Route>
          <Route path="/signup" exact>
            <SignUp
              changed={props.changed}
              signup={props.signup}
              errormessage={props.errormessage}
              errorclicked={props.errorclicked}
            />
          </Route>
          <Route path="/confirm" exact>
            <ConfirmSignUp
              user={props.username}
              changed={props.changed}
              confirmsignup={props.confirmsignup}
              resendConfirmationCode={props.resendConfirmationCode}
              errormessage={props.errormessage}
              errorclicked={props.errorclicked}
            />
          </Route>
          <Route path="/newpassword" exact>
            <Newpassword
              changed={props.changed}
              newpassword={props.newpassword}
              resendConfirmationCode={props.resendConfirmationCode}
              errormessage={props.errormessage}
              errorclicked={props.errorclicked}
            />
          </Route>
         <Route path="/AfterLogin" exact render={() => checkRoute(<AfterLogin />)}/>
         <Route path="*" exact>
            <ErrorPage/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default nav;
//<AfterSignIn changed={onChange} signIn={signIn} errormessage={message}
// errorclicked={onInitialmessage}/>
//<AfterSignUp changed={onChange} signup={signUp} errormessage={message} />
//<AfterLogin>
//<ConfirmSignUp changed={onChange} confirmsignup={confirmSignUp}
// resendConfirmationCode={resendConfirmationCode} errormessage={message}
// errorclicked={onInitialmessage} />
