import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"

const SignUp = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
     } = useForm()
    
    const onSubmit = (data) => console.log(data)

  return (
    <div className="flex h-screen justify-center items-center">
      <div  className="w-[600px]">
        <div className="modal-box mx-4 dark:bg-slate-800 md:m-7 p-5 ">
          <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to= '/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
         
          <h3 className="font-bold text-2xl text-center">SignUp</h3>

          <div className="space-y-3 mt-4">
            <span className="text-lg">Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Name"
              className="px-5 py-2 w-full border border-black outline-none rounded-md
              dark:bg-slate-500 dark:text-white dark:placeholder:text-white font-normal
              "
              {...register("name", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500">This field is required!</span>}
          </div>

          <div className="space-y-3 mt-4">
            <span className="text-lg">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-2 w-full border border-black outline-none rounded-md
              dark:bg-slate-500 dark:text-white dark:placeholder:text-white font-normal"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500">This field is required!</span>}
          </div>
          <div className="space-y-3 mt-4">
            <span className="text-lg">Password</span>
            <br />
            <input
              type="text"
              placeholder="Enter your password"
              className="px-5 py-2 w-full border border-black outline-none rounded-md
              dark:bg-slate-500 dark:text-white dark:placeholder:text-white font-normal"
              {...register("password", { required: true })}
            
            />
            {errors.email && <span className="text-sm text-red-500">This field is required!</span>}
          </div>
          <div className="flex justify-center">
            <button className="btn btn-secondary mt-6 px-8 text-sm">
              SignUp
            </button>
          </div>
          <p className=" text-center mt-4 text-sm">
            Have account ?{" "}
            <button to="/" className="underline cursor-pointer text-blue-500"
            onClick={()=>
                document.getElementById('my_modal_3').showModal()
            }
            >
              {" "}
              Login
            </button>
            
          </p>
          <Login/>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default SignUp;
