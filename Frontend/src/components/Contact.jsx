import React from 'react'
import Navbar from './Navbar'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'


const Contact = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = async(data)=>{
      try {
        const contactInfo = {
          firstName: data.firstName, 
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          message: data.message
        }
        await axios
        .post('http://localhost:8000/v1/contactInfo', contactInfo)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
            toast.success('Message Send Successfully!')
            navigate(from, {replace:true})
          }
        })
        .catch((err)=>{
          if (err.response) {
            console.log(err);
            toast.error(`${err.response.data.message}`);
            // alert(`ERROR: ${err.response.data.message}`)
          }
        })
      } catch (error) {
        
        console.log(`There are somethig WRONG in onSubmit function!
        ERR:${error}`)
      }
    }

    return (
        <div> 
          
         <Navbar/>
          <div className="mx-auto max-w-7xl px-4 md:mt-10">
            {/* Hero Map */}
            <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
              {/* <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
                <p className="text-center text-xs font-semibold leading-normal md:text-sm dark: text-black">
                  Share your thoughts
                </p>
              </div> */}
              <p className="text-center text-3xl font-bold text-gray-900 md:text-4xl md:leading-5 dark:text-white">
                Love to hear <span className='text-[#407BFF]'>from you.</span>
              </p>
              <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-md dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
                neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
              </p>
            </div>
            <div className="mx-auto max-w-7xl py-12 md:py-2">
              <div className="grid items-center justify-items-center gap-x-4 gap-y-10">
                {/* contact from */}
                <div className="flex items-center justify-center">
                  <div className="px-2 md:px-12">
                    <p className=" text-center text-2xl font-bold text-gray-900 md:text-4xl dark:text-white">Get <span className='text-[#407BFF]'>in touch.</span></p>
                    <form  className="mt-8 space-y-4">
                      <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                        <div className="grid w-full  items-center gap-1.5">
                          <label
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                            htmlFor="first_name"
                          >
                            First Name
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                            type="text"
                            id="first_name"
                            placeholder="First Name"
                            {...register("firstName", { required: true })}
                          />
                        </div>
                        <div className="grid w-full  items-center gap-1.5">
                          <label
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                            htmlFor="last_name"
                          >
                            Last Name
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                            type="text"
                            id="last_name"
                            placeholder="Last Name"
                            {...register("lastName", { required: true })}

                          />
                        </div>
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="email"
                          placeholder="Email"
                          {...register("email", { required: true })}

                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                          htmlFor="phone_number"
                        >
                          Phone number
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="tel"
                          id="phone_number"
                          placeholder="Phone number"
                          {...register("phoneNumber", { required: true })}

                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          className="flex h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          id="message"
                          placeholder="Leave us a message"
                          cols={3}
                          {...register("message", { required: true })}

                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleSubmit(onSubmit)}
                        className="w-full rounded-md  bg-[#407BFF] hover:bg-[#6495fe] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
         
         
        </div>
      )
}

export default Contact
