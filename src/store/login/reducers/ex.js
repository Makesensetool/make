/* eslint-disable no-unused-vars */
import config from "../../../aws-exports";
import Amplify, { Auth, Hub } from "aws-amplify";
Amplify.configure(config);

const initialFormState = {
  username: "",
  password: "",
  authCode: "",
  newpassword:"",
  typeofchange:undefined,
  user:"",
};

export const newpassword=(state=initialFormState,action)=>{ 

    switch(action.type){
    case "newpassword": 

        return{
              ...state,
              username:action.username,
              authCode:action.authCode,
              newpassword:action.new_password,
              typeofchange:action.newpassword(action.username,action.authCode,action.new_password)
            }

      case "forgotpassword":
        return{
              ...state,
              username:action.username,
              typeofchange:action.forgotpassword(action.username)
            }
      case "resendConfirmationCode":
        return{
            ...state,
            typeofchange:action.resendConfirmationCode(action.username)
            }
      case "signIn":
        return{
              ...state,
              username:action.username,
              password:action.password,
              typeofchange:action.signIn(action.username,action.password)
            }
      case "signUp":
        return{
              ...state,
              typeofchange:action.signUp(action.username,action.email, action.password,action.Repeatpassword)
            }
      case "confirmSignUp":
        return{
              ...state,
              typeofchange:action.confirmSignUp(action.username,action.authCode)
            }
       case "tryingsigincomplete":
        return{
              ...state,
              user:action.sigincomplete(action.username)
            }

      default:
        return state;
}
}