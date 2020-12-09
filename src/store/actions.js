export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGOUT_ACTION = "LOGOUT_ACTION";

export const createLoginAction = ({user, access_token}) => ({
    type: LOGIN_ACTION,
    payload: {user, access_token}
});

export const createLogoutAction = () => ({
  type: LOGOUT_ACTION,
});
