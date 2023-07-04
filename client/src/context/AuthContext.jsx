import { createContext, useReducer } from "react";
import reducer, { initialState } from "../reducer/reducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
