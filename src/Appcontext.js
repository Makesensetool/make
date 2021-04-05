import config from "./aws-exports";
import Amplify, { Auth, Hub } from "aws-amplify";
Amplify.configure(config);

export async function signIn(username, password) {
  console.log(username,password)
  try {
    if(await Auth.signIn(username, password)){
      console.log("credentials are ok");
    }
  } catch (err) {
    console.log("error resending code: ", err);
  }
}


export async function signUp(username, email, password, Repeatpassword) {
  if (password === Repeatpassword) {
    try {
      await Auth.signUp({ username, password, attributes: { email } });
      window.location.href = "/confirm";
      console.log("i have reached the before of push");
    } catch (err) {
      console.log("hi vijay error in AWS!");
    }
  } else {
    console.log("hi vijay !");
  }
}


export async function confirmSignUp(username, authCode) {
  try {
    console.log("hi i reached confirm signup function");
    await Auth.confirmSignUp(username, authCode);
    console.log("hi i crossed confirm signup function");
  } catch (err) {
    console.log("error resending code: ", err);
  }
}

export  async function resendConfirmationCode(username) {
  try {
    await Auth.resendSignUp(username);
    window.location.href = "/confirm";
    console.log("code resent successfully");
  } catch (err) {
    console.log("error resending code: ", err);
  }
}


export async function forgotpassword(username) {
  await Auth.forgotPassword(username)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  console.log(username);
  // window.location.href="/newpassword";
}

// Collect confirmation code and new password, then
export  async function newpassword(username, authCode, newpassword) {
  await Auth.forgotPasswordSubmit(username, authCode, newpassword)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}