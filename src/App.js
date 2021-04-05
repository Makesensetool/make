/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import config from "./aws-exports";
import {Router,Route,Switch,Link} from "react-router-dom";
import {newestpassword,forgottenpassword,resendConfirmation,signingin,lookinSignUp,newUser,tryingsigincomplete} from "./store/login/actions/index";
import Amplify, { Auth, Hub } from "aws-amplify";
import history from './history';
import { ContextProvider, AppContext } from "./Appcontext";
import SignIn from "../src/logincomponents/signin";
import { useSelector, useDispatch } from "react-redux";
import SignUp from "../src/logincomponents/signup";
import ConfirmSignUp from "../src/logincomponents/conformsignup";
import Forgotpassword from "../src/logincomponents/forgotpassword";
import AfterLogin from "./login";
import {signIn,signUp,confirmSignUp,resendConfirmationCode,forgotpassword,newpassword} from "./Appcontext"

import Newpassword from "./logincomponents/newpassword";
Amplify.configure(config);
const initialFormState = {
  username: "",
  password: "",
  email: "",
  authCode: "",
  newpassword:"",
  user:"",
}
export default function Login() {
  const login = useSelector((state) => state.new);
  const dispatch = useDispatch();
  const [formState,updateFormState] = useState(initialFormState);
  const [message, updatemessage] = useState();
  const [user,updateuser]=useState(login.user)
  async function onChange(e) {
    e.persist();
    updateFormState(() => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  }
  const onInitialmessage = () => {
    updateFormState(() => ({
      ...formState,
      message: null,
    }));
  };
  // eslint-disable-next-line no-unused-vars
console.log(login.user)
 function sigincomplete(username) {
    console.log("passed signin complete")
    console.log("*************************")
    return username
    }

 async function signIn(username, password) {
  console.log(username,password)
  try {
      await Auth.signIn(username, password)
      signincompleted(username)
      console.log("credentials are ok");
      history.push("/AfterLogin");

  } catch (err) {
    console.log("error resending code: ", err);
  }
}
async function signUp(username, email, password, Repeatpassword) {
  if (password === Repeatpassword) {
    try {
      await Auth.signUp({ username, password, attributes: { email } });
      console.log(login.user)
      console.log("i have reached the before of push");
    } catch (err) {
      console.log("hi vijay error in AWS!");
      console.log(login.user)
      console.log(login.username)
    }
  } else {
    console.log("hi vijay !");
  }
}

 // sending request to the dispatch
  const signInner = () =>dispatch(signingin(formState.username,formState.password,signIn));

  const signincompleted=(username)=>dispatch(tryingsigincomplete(username,sigincomplete))

  const newpassworder = () =>dispatch(newestpassword(formState.username,formState.authCode,formState.newpassword,newpassword));
  const forgotpass = () =>dispatch(forgottenpassword(formState.username, forgotpassword));
  const resendConfirm = () =>dispatch(resendConfirmation(formState.username, resendConfirmationCode));
  const signing = () =>dispatch(newUser(formState.username,formState.email,formState.password,formState.Repeatpassword,signUp));
  const confirmsign = () =>dispatch(lookinSignUp(formState.username, formState.authCode, confirmSignUp));
  // sending request to the dispatch last value end....
  console.log(user)
  
  const checkRoute = (component) => {
      if (login.user) {
        console.log("hello vijay")
        return component;
      } else {
        console.log(login.user)
        console.log(login.username)
       console.log("component error issue")
      }
    };
  return (
    <Fragment>
      <Router  history={history}>
        <Switch>
          <Route path="/Forgotpassword" exact>
            <Forgotpassword
              changed={onChange}
              resend={forgotpass}
              errormessage={message}
              errorclicked={onInitialmessage}
            />
          </Route>
          <Route path="/" exact>
            <SignIn
              changed={onChange}
              signIn={signInner}
              errormessage={login.user}
              errorclicked={onInitialmessage}
            />
          </Route>
          <Route path="/signup" exact>
            <SignUp
              changed={onChange}
              signup={signing}
              errormessage={login.user}
              errorclicked={onInitialmessage}
            />
          </Route>
          <Route path="/confirm" exact>
            <ConfirmSignUp
              changed={onChange}
              confirmsignup={confirmsign}
              resendConfirmationCode={resendConfirm}
              errormessage={message}
              errorclicked={onInitialmessage}
            />
          </Route>
          <Route path="/newpassword" exact>
            <Newpassword
              changed={onChange}
              confirmsignup={newpassworder}
              resendConfirmationCode={resendConfirm}
              errormessage={message}
              errorclicked={onInitialmessage}
            />
          </Route>
         <Route path="/AfterLogin" exact render={() => checkRoute(<AfterLogin />)}>
          </Route>
        </Switch>
      </Router>
    </Fragment>

  );
}
//<AfterSignIn changed={onChange} signIn={signIn} errormessage={message}
// errorclicked={onInitialmessage}/>
//<AfterSignUp changed={onChange} signup={signUp} errormessage={message} />
//<AfterLogin>
//<ConfirmSignUp changed={onChange} confirmsignup={confirmSignUp}
// resendConfirmationCode={resendConfirmationCode} errormessage={message}
// errorclicked={onInitialmessage} />
