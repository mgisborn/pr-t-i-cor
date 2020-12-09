import { useContext } from "react";
import { createLogoutAction, createLoginAction } from "../../store/actions";
import { AuthContext } from "./context";
import { AuthApi } from "./api";

export const useAuthManager = () => {
  const { authState, authDispatch } = useContext(AuthContext);

  const logout = () => {
    authDispatch(createLogoutAction());
  };

  const handleRedirectFromGithub = async ({ code }) => {
    const response = await AuthApi.getAccessToken({
      code,
    });
    authDispatch(createLoginAction({user: response.user, access_token: response.access_token}));
  };

  return {
    isLoggedIn: authState.isLoggedIn,
    user: authState.user,
    logout,
    handleRedirectFromGithub
  };
};
