/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import config from "./aws-exports";
import {
  newestpassword,
  forgottenpassword,
  resendConfirmation,
  signingin,
  lookinSignUp,
  newUser,
  tryingsigincomplete,
} from "./store/login/actions/index";
import Amplify, { Auth, Hub } from "aws-amplify";
import history from "./history";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./loginNavigations";
Amplify.configure(config);

const initialFormState = {
  username: "",
  password: "",
  authCode: "",
  newpassword:"",
  typeofchange:undefined,
  user:"",
  Repeatpassword:"",
};

export default function Login() {
  const login = useSelector((state) => state.new);
  const dispatch = useDispatch();
  const [formState, updateFormState] = useState(initialFormState);
  const [message,updateMessage] = useState();
  const onChange = (e) => {
    e.persist();
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  };
  const onInitialmessage = () => updateMessage(null)
  // eslint-disable-next-line no-unused-vars
  const sigincomplete = (username) => username;
  const signIn = async (username, password) => {
    console.log(username, password);
    try {
      await Auth.signIn(username, password);
      Auth.currentSession().then((data) => {
        signincompleted(data.accessToken.jwtToken);
        console.log("credentials are ok");
        history.push("/AfterLogin");
      });
    } catch (err) {
      console.log(err.message);
      updateMessage(err.message)
    }
  };

  async function signUp(username, email, password, Repeatpassword) {
    if (password === Repeatpassword) {
      try {
        await Auth.signUp({ username, password, attributes: { email } });
        history.push("/confirm");
        console.log("i have reached the before of push");
      } catch (err) {
        updateMessage(err.message)
      }
    } else {
      updateMessage("Please check the Password !");
    }
  }

  async function confirmSignUp(username, authCode) {
    try {
      await Auth.confirmSignUp(username, authCode);
      history.push("/");
    } catch (err) {
      updateMessage(err.message)
    }
  }

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(login.username);
      history.push("/confirm");
      console.log("code resent successfully");
    } catch (err) {
      updateMessage(err.message)
    }
  }

  async function forgotpassword(username) {
    try {
      await Auth.forgotPassword(username);
      console.log(username);
      history.push("/newpassword");
    } catch (err) {
      updateMessage(err.message)
    }
  }

  // Collect confirmation code and new password, then
  async function newpassword(username, authCode, newpassword) {
    try {
      console.log(username, authCode, newpassword)
      await Auth.forgotPasswordSubmit(username, authCode, newpassword);
      history.push("/");
    } catch (err) {
      updateMessage(err.message)
    }
  }

  // sending request to the dispatch
  const signInner = () =>
    dispatch(signingin(formState.username, formState.password, signIn));
  const signincompleted = (username) =>
    dispatch(tryingsigincomplete(username, sigincomplete));
  const newpassworder = () =>
    dispatch(
      newestpassword(
        formState.username,
        formState.authCode,
        formState.newpassword,
        newpassword
      )
    );
  const forgotpass = () =>
    dispatch(forgottenpassword(formState.username, forgotpassword));
  const resendConfirm = () =>
    dispatch(resendConfirmation(resendConfirmationCode));
  const signing = () =>
    dispatch(
      newUser(
        formState.username,
        formState.email,
        formState.password,
        formState.Repeatpassword,
        signUp
      )
    );
  const confirmsign = () =>
    dispatch(
      lookinSignUp(formState.username, formState.authCode, confirmSignUp)
    );
  // sending request to the dispatch last value end....
  return (
    <Fragment>
      <Nav
        changed={onChange}
        loginuser={login.user}
        resend={forgotpass}
        errormessage={message}
        errorclicked={onInitialmessage}
        signIn={signInner}
        signup={signing}
        confirmsignup={confirmsign}
        resendConfirmationCode={resendConfirm}
        newpassword={newpassworder}
      />
    </Fragment>
  );
}
