import React, { createContext, useReducer } from "react";
import { formReducer } from "./formReducer";

// initialState for form
const initialState = {
  name: "",
  email: "",
  password: "",
};

// create Context
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
