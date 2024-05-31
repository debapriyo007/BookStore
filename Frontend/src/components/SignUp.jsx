import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:8000/v1/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("User created Successfully!");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error(`${err.response.data.message}`);
          // alert(`ERROR: ${err.response.data.message}`)
        }
      });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-[600px]">
        <div className="modal-box mx-4 dark:bg-slate-800 md:px-12 md:py-20 md:m-7 ">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl text-center">SignUp</h3>

            <div className="space-y-3 mt-4">
              <span className="text-lg">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                {...register("name", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required!
                </span>
              )}
            </div>

            <div className="space-y-3 mt-4">
              <span className="text-lg">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required!
                </span>
              )}
            </div>
            <div className="space-y-3 mt-4">
              <span className="text-lg">Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                {...register("password", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required!
                </span>
              )}
            </div>
            <div className="flex justify-center">
              <button className="btn bg-[#407BFF] text-white hover:bg-[#6495fe] mt-6 px-8 text-sm">
                SignUp
              </button>
            </div>
            <p className=" text-center mt-4 text-sm">
              Have account ?{" "}
              <Link to="/" className="underline cursor-pointer text-blue-500">
                {" "}
                Login
              </Link>
            </p>
            {/* <Login/> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
