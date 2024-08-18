import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Cards = ({ item }) => {
  return (
    <>
      {/* <div className="mt-7 mb-7">
        <div className="card md:w-[300px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white cursor-pointer">
          <figure>
            <img
              src={item.image}
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge bg-[#407BFF] text-white border border-black">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center flex-col items-center">
              <div className="text-2xl">${item.price}</div>
              <div className="badge badge-outline  py-4  cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div> */}


     {/* ************ Updated UI *******************/}
      <div className="p-5">

        <div className="w-[300px] rounded-md border cursor-pointer">
          <img
            src={item.image}
            alt="Laptop"
            className="w-full rounded-t-md object-cover"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {item.name} &nbsp; <FiArrowUpRight className="h-4 w-4" />
            </h1>
            <p className="mt-3 text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <div className="mt-4">
            <div className="text-3xl text-center">${item.price}</div>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-md bg-[#407BFF] px-2 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#4d80f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
