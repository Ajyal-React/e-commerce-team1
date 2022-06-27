import { USER_SIGN_IN, USER_SIGN_UP } from "../userTypes";

export const userReducer = (state = "", action) => {
  switch (action.type) {
    case USER_SIGN_IN: 
      return action.payload;
    case USER_SIGN_UP: 
      return action.payload;
    default:
      return state;
  }
};
