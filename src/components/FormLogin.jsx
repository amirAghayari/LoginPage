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
      className="flex flex-col gap-4 items-center justify-center "
    >
      <div className="max-w-70 min-w-66">
        <label className="  text-gray-700 ">Your Name:</label>
        <input
          type="text"
          className="input input-neutral validator border-2 border-solid border-gray-400"
          placeholder="Enter your Name"
          {...register("name", { required: "name is required" })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div className="max-w-70 min-w-66">
        <label className="  text-gray-700">Your Email:</label>
        <input
          type="email"
          className="input input-neutral validator border-2 border-solid border-gray-400"
          placeholder="Enter your Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="max-w-70 min-w-66">
        <label className="  text-gray-700">Your Password:</label>
        <input
          type="password"
          className="input input-neutral validator border-2 border-solid border-gray-400"
          placeholder="Enter your password"
          {...register("password", { required: "password is required" })}
        />
      </div>
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
