import config from "./aws-exports";
import Amplify, { Auth, Hub } from "aws-amplify";
import history from './history';
Amplify.configure(config);



export async function signUp(username, email, password, Repeatpassword) {
  if (password === Repeatpassword) {
    try {
      await Auth.signUp({ username, password, attributes: { email } });
      history.push("/confirm");
      console.log("i have reached the before of push");
    } catch (err) {
      localStorage.setItem("errormessage",err.message)
    }
  } else {
    localStorage.setItem("errormessage","Please check the Password !")
  }
}


export async function confirmSignUp(username, authCode) {
  try {
    await Auth.confirmSignUp(username, authCode);
  } catch (err) {
    localStorage.setItem("errormessage",err.message)
  }
}

export  async function resendConfirmationCode(username) {
  try {
    await Auth.resendSignUp(username);
    history.push("/confirm");
    console.log("code resent successfully");
  } catch (err) {
    localStorage.setItem("errormessage",err.message)
  }
}


export async function forgotpassword(username) {
  try{
    await Auth.forgotPassword(username);
    console.log(username);
    history.push("/newpassword");}
    catch(err){
      localStorage.setItem("errormessage",err.message)
    }
}

// Collect confirmation code and new password, then
export  async function newpassword(username, authCode, newpassword) {
  try{
    await Auth.forgotPasswordSubmit(username, authCode, newpassword)
  }catch(err){
    localStorage.setItem("errormessage",err.message)
  }
  
}

