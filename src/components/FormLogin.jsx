import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "./../context/FormContext";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Save data in reducer
    dispatch({
      type: "UPDATE_FORM",
      payload: { field: "name", value: data.name },
    });
    dispatch({
      type: "UPDATE_FORM",
      payload: { field: "email", value: data.email },
    });
    dispatch({
      type: "UPDATE_FORM",
      payload: { field: "password", value: data.password },
    });

    console.log("Form Data in Reducer:", state);

    // Check if the credentials match
    if (
      data.name === "amirhossein" &&
      data.email === "amiraghayari2119@gmail.com" &&
      data.password === "amir2119"
    ) {
      // Navigate to the login page
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center justify-center"
    >
      {/* Name Field */}
      <div className="max-w-70 min-w-66">
        <label className="text-gray-700">Your Name:</label>
        <input
          type="text"
          className={`input input-neutral validator border-2 border-solid ${
            errors.name ? "border-red-500" : "border-gray-400"
          }`}
          placeholder="Enter your Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      {/* Email Field */}
      <div className="max-w-70 min-w-66">
        <label className="text-gray-700">Your Email:</label>
        <input
          type="email"
          className={`input input-neutral validator border-2 border-solid ${
            errors.email ? "border-red-500" : "border-gray-400"
          }`}
          placeholder="Enter your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      {/* Password Field */}
      <div className="max-w-70 min-w-66">
        <label className="text-gray-700">Your Password:</label>
        <input
          type="password"
          className={`input input-neutral validator border-2 border-solid ${
            errors.password ? "border-red-500" : "border-gray-400"
          }`}
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-success btn-outline btn-wide !bg-success text-accent text-emerald-900"
      >
        Get Started
      </button>
    </form>
  );
}

export default FormLogin;
