import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-2 bg-white">
      <div className="max-w-[1240px] mx-auto p-8 grid lg:grid-cols-3 border-black border">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-center  text-black font-bold py-2">
            10% off your first purchase
          </h1>
          <p className="text-[#000] text-center pt-2">
            Be the first to know about new arrivals, deals & the best price
          </p>
        </div>
        <div className="my-4 mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full  border-b border-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="text-[#000300] border-black border-b w-[200px] font-bold ml-4 my-6 mx-auto py-3 ">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
