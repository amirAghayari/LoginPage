import React from "react";
import { useForm } from "react-hook-form";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center justify-center"
    >
      <label className="absolute top-4 z-10 left-155">Your Name:</label>
      <input
        type="text"
        className="input input-neutral validator "
        placeholder="Enter your Name"
        {...register("name", { required: "name is required" })}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <label className="mt-8 z-10 ">Your Email:</label>
      <input
        type="email"
        className="input input-neutral validator "
        placeholder="Enter your Email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <label className="mt-8 z-10 ">Your Pass:</label>
      <input
        type="password"
        className="input input-neutral validator "
        placeholder="Enter your password"
        {...register("password", { required: "password is required" })}
      />
      <button
        type="submit"
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl  btn-success btn-outline btn-wide !bg-success text-accent text-emerald-900"
      >
        Get Started
      </button>
    </form>
  );
}

export default FormLogin;
