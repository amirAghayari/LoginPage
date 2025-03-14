import React, { createContext, useReducer } from "react";
import { formReducer } from "./formReducer"; // مطمئن شوید نام فایل درست است

// حالت اولیه برای فرم
const initialState = {
  name: "",
  email: "",
  password: "",
};

// ایجاد Context
export const FormContext = createContext();

// ایجاد Provider
export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
