import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";


const Login = () => {
 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
     } = useForm()
    
    const onSubmit = async(data) => {
      const userInfo = {
        email: data.email,
        password: data.password,
      }
      await axios.post('http://localhost:8000/v1/user/login', userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          // alert('LogIn Successfully')
          toast.success('Login Successfully');
          document.getElementById("my_modal_3").close()
          setTimeout(()=>{
             window.location.reload()
            localStorage.setItem('Users', JSON.stringify(res.data))
          },3000)
        }
        localStorage.setItem("Users", JSON.stringify(res.data))
      })
      .catch((err)=>{
        if(err.response){
          console.log(err)
          // alert(`ERROR: ${err.response.data.message}`)
          toast.error(`${err.response.data.message}`);
          setTimeout(()=>{},3000)
        }
      })
    }
    
  return (
    
    <div className="">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-10  py-16 mt-2 dark:bg-slate-800">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=> document.getElementById("my_modal_3").close()}>
              ✕
            </Link>
          
          <h3 className="font-bold text-2xl text-center">Login</h3>
            <div className="space-y-3 mt-4">
                <span className="text-lg">Email</span>
                <br />
                <input type="email" placeholder="Enter your email" 
                 className="  px-5 py-2 w-full border border-black outline-none rounded-md dark:bg-slate-500 dark:text-white dark:placeholder:text-white font-normal"
                 {...register("email", { required: true })}/>
                  {errors.email && <span className="text-sm text-red-500">This field is required!</span>}
            </div>
            <div className="space-y-3 mt-4">
                <span className="text-lg">Password</span>
                <br />
                <input type="password" placeholder="Enter your password" 
                 className="px-5 py-2 w-full border border-black outline-none rounded-md
                 dark:bg-slate-500 dark:text-white dark:placeholder:text-white font-normal"
                 {...register("password", { required: true })}/>
                  {errors.password  && <span className="text-sm text-red-500">This field is required!</span>}
            </div>
           <div className="flex justify-center">
             <button className="btn btn-secondary mt-6 px-8 text-sm">Login</button>
            
            </div>
            <p className="text-center mt-4 text-sm">Not registerd ? 
            <Link to= '/signup' className="underline cursor-pointer text-blue-500"
            
            
            > {" "}SignUp</Link></p>
           
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
