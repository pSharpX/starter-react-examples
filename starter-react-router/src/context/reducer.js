import initialState from "./state";
import * as actionTypes from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGGED_IN: {
      return {
        ...state,
        authenticated: true,
      };
    }
    case actionTypes.LOGGED_OUT: {
      return {
        ...state,
        authenticated: false,
      };
    }
    case actionTypes.SAVE_USER_COGNITO_DATA: {
      const { user } = action.payload;
      return {
        ...state,
        user,
      };
    }
    default:
      return state;
  }
};

export default reducer;
