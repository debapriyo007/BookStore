import React from "react";
import bannerImg from '/Banner3.png'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* <div className="max-w-screen-2xl container mx-auto md:px-20 py-10 px-4 flex flex-col md:flex-row mt-16 md:mb-8">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-12 mt-3">
            <h1 className="text-4xl font-bold">
              Hello, Wellcomes here to learn something{" "}
              <span className="text-[#407BFF]">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              laborum numquam obcaecati, quis omnis inventore molestias magnam
              exercitationem unde repellat!
            </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow " placeholder="Email" />
          </label>
          </div>
          <Link to="/course">
          <button className="btn bg-[#407BFF] text-white mt-6 hover:bg-[#6495fe]">Explore More</button>

          </Link>
          </div>
        <div className="w-full md:w-1/2 order-1">
            <img  src={bannerImg} className="md:mx-10  w-92 h-92" alt="Banner_of_BookStore" />
        </div>
      </div> */}

    {/* ************ Updated Banner UI *******************/}
      <div className="max-w-screen-2xl container mx-auto md:px-20 pt-10 px-4 flex flex-col md:flex-row mt-5">

      <div className="relative w-full  dark:bg-slate-900">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1 text-black dark:bg-slate-700 dark:text-white">
              <div className="rounded-full bg-white p-1 px-2 text-black dark:bg-slate-900 dark:text-white">
                <p className="text-sm font-medium">Purchase</p>
              </div>
              <p className="text-sm font-medium">Your's favourit Book&rarr;</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl dark:text-white">
              People who care about <span className="text-[#407BFF]">your growth</span>
            </h1>
            <p className="mt-8 md:text-lg text-md text-gray-700 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi blanditiis
              dolores quasi eaque explicabo!
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/30 dark:placeholder-white dark:text-white dark:bg-slate-800 dark:focus:ring-white/30 dark:disabled:opacity-50 dark:disabled:cursor-not-allowed"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                ></input>
                <p className="mt-2 text-sm text-gray-500">We care about your privacy</p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black
                  dark:bg-white dark:text-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className=" aspect-[3/2] object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src={bannerImg}
              alt=""
            />
          </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default Banner;
