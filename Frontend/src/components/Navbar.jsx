import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";
import SignUp from './SignUp'




const Navbar = () => {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  


  // This is for Theme color changes
  const [theme, Settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    const element = document.documentElement

    useEffect(()=>{
      if(theme === 'dark'){
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        document.body.classList.add('dark')
      }else{
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        document.body.classList.remove('dark')
      
      }
    }, [theme])



    const [sticky, Setsticky] = useState(false)
    useEffect(()=>{
      const handleScroll = ()=>{
        if(window.scrollY>0){
          Setsticky(true)
        }else{
          Setsticky(false)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return ()=>{
        window.removeEventListener('scroll', handleScroll)
      }
  }, [])



  const navItems = (
    <>
      <li>
        <Link to={'/'}> <a>Home</a></Link>
      </li>
      <li>
        <Link to={'/course'}> <a>Books</a></Link>
      </li>
      <li>
       
        <Link to={'/contact'}> <a>Contact</a></Link>
      </li>
      <li>
      <Link to={'/aboutus'}> <a>About Us</a></Link>
        
      </li>
    </>
  );
  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 dark:bg-slate-900 dark:text-white ${
        sticky ? "sticky-navbar shadow-md bg-base-100 dark:bg-slate-800 duration-300 transition-all ease-in-out":""
      }`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <Link to={'/'}> <a className="text-xl md:text-2xl font-bold cursor-pointer"><span className="">Book</span> Store.</a></Link>
          </div>

          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>

            <div className="hidden md:block">
              <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                <input type="text" className="grow outline-none dark:bg-slate-900 dark:text-white placeholder:text-sm font-thin" placeholder="Search here..." />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            {/* Dark Night icon */}

            
{/* 
            {authUser ? (
                <LogOut/>
                ) :(

                <div className="">
                  <a
                    className="bg-black text-white px-3 py-2 rounded-md
                  hover:bg-slate-800 duration-300 cursor-pointer dark:border dark:text-white"
                  onClick={()=> document.getElementById('my_modal_3').showModal()}
                  >
                    Login
                  </a>
                  <Login/>
                </div>
            )} */}
             
             {authUser ? (<Logout/>) : (
              <div className="">
                <a
                  className="bg-black text-white px-4 py-2 rounded-md
                hover:bg-slate-800 duration-300 cursor-pointer dark:border dark:text-white"
                  onClick={()=> document.getElementById('my_modal_3').showModal()}
                >
                  Login
                </a>
                <Login/>
              </div>
             )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
