import { LOGIN_ACTION, LOGOUT_ACTION } from "../actions";

export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
        console.log(action.payload)
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem(
        "access-token",
        JSON.stringify(action.payload.access_token)
      );
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        access_token: action.payload.aaccess_token,
      };
    }
    case LOGOUT_ACTION: {
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    default:
      return state;
  }
};
