import React, { useReducer, createContext } from "react";

export const GlobalContext = createContext([]);

const initialState = {
  email: "",
  password: "",
  firstName: "",
  surname: ""
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_LOGIN_INFO":
      return {
        ...state,
        email: action.email,
        password: action.password
      };
    case "SAVE_PERSONAL_INFO":
      return {
        ...state,
        firstName: action.firstName,
        surname: action.surname
      };
    default:
      return {
        ...state
      };
  }
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
