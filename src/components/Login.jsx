import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          <h3 className="font-bold text-lg">Login!</h3>
          <div className="space-y-2 mt-4">
            <label for="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("email", { required: true })}
            ></input>
            <br/>
            {errors.email && <span className="text-sm text-red-500">This field is Required</span>}
          </div>

          <div className="space-y-2 mt-4">
            <label for="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("password", { required: true })}
            ></input>
            <br/>
            {errors.password && <span className="text-sm text-red-500">This field is Required</span>}
          </div>

          <div className="flex justify-around mt-8">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not Registered?
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
