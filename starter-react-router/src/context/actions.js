import * as actionTypes from "./actionTypes";

export const loggedIn = () => {
  return {
    type: actionTypes.LOGGED_IN,
  };
};

export const loggedOut = () => {
  return {
    type: actionTypes.LOGGED_OUT,
  };
};

export const saveUserCognitoData = (user) => {
  return {
    type: actionTypes.SAVE_USER_COGNITO_DATA,
    payload: { user },
  };
};
