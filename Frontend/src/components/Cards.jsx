import React from "react";

const Cards = ({item}) => {
  
  return (
    <>
      <div className="mt-7 mb-7">
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
      </div>
    </>
  );
};

export default Cards;
