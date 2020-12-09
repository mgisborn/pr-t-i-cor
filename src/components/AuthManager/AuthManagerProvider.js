import React, { useReducer } from "react";
import { initialState, reducer } from "../../store/reducer";
import { AuthContext } from "./context";

export const AuthManagerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        authState: state,
        authDispatch: dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
