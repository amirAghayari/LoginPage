import React from "react";
import FormLogin from "./FormLogin";
import DaysiBtn from "./DaysiBtn";

function Login() {
  return (
    <div className="bg-gray-200 w-120 h-170 pt-5 rounded-r-2xl">
      <FormLogin />
      <p className="text-center text-gray-600">
        ----------------or----------------
      </p>
      <DaysiBtn />
    </div>
  );
}

export default Login;
