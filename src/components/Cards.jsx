import React from "react";
import Single from "../assets/banner-1.jpg";
import Double from "../assets/banner-2.jpg";
import Triple from "../assets/banner-3.jpg";

const Cards = () => {
  return (
    <div className="w-full py-[4.5rem]  bg-black">
      <div className="max-w-[100%] mx-auto mb-20 grid md:grid-cols-3 gap-6">
        <div className="flex flex-col p-4 my-1 ">
          <img className="" src={Single} />
          <div>
            <h2 className="text-2xl font-bold text-left text-white py-2">
              New Arrival
            </h2>
            <button className="text-[#00df9a] font-medium border-b">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-full h-[500px] flex flex-col p-4 my-4 ">
          <img className="w-full" src={Double} />
          <div>
            <h2 className="text-2xl font-bold text-left text-white py-2">
              The best of Back-to-School
            </h2>
            <button className="text-[#00df9a] mx-auto font-medium border-b">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-full h-[500px] flex flex-col p-4 my-4 ">
          <img className="w-full" src={Triple} />
          <div>
            <h2 className="text-2xl font-bold text-left text-white py-2">
              Make your own Move
            </h2>
            <button className="text-[#00df9a] mx-right font-medium border-b">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-10 cards py-[4rem] flex justify-center items-center flex-col md:flex-1">
        <h2 className="text-[#000] font-bold text-5xl md:text-2xl  p-6 text-center">
          New Balance Fresh Foam
        </h2>
        <p className="text-gray-400 text-2xl">
          Now Available In Store & Online
        </p>
        <button className="bg-[#00df9a] text-black p-2 mt-6 font-bold">
          SHOP COLLECTION
        </button>
      </div>
    </div>
  );
};

export default Cards;
