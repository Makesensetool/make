export const newestpassword = (
  username,
  authCode,
  new_password,
  newpassword
) => {
  return {
    type: "newpassword",
    username: username,
    authCode: authCode,
    new_password: new_password,
    newpassword: newpassword,
  };
};
export const forgottenpassword = (username, forgotpassword) => {
  return {
    type: "forgotpassword",
    username: username,
    forgotpassword: forgotpassword,
  };
};
export const resendConfirmation = (username, resendConfirmationCode) => {
  return {
    type: "resendConfirmationCode",
    username: username,
    resendConfirmationCode: resendConfirmationCode,
  };
};
export const signingin = (username, password,signIn) => {
  return {
    type: "signIn",
    username: username,
    password: password,
    signIn: signIn,
  };
};
export const lookinSignUp = (username, authCode, confirmSignUp) => {
  return {
    type: "confirmSignUp",
    username: username,
    authCode: authCode,
    confirmSignUp: confirmSignUp,
  };
};
export const newUser = (username, email, password, Repeatpassword, signUp) => {
  return {
    type: "signUp",
    username: username,
    email: email,
    password: password,
    Repeatpassword: Repeatpassword,
    signUp: signUp,
  };
};

export const tryingsigincomplete=(username,sigincomplete)=>{
  return {
    type:"tryingsigincomplete",
    username:username,
    sigincomplete:sigincomplete
  }
}