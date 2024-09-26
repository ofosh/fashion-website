import React from "react";

const hero = () => {
  return (
    <div className="text-black hero">
      <div className="max-w-[800px] mt-[-4px] w-full h-screen md:mx-left text-center flex flex-col justify-center ">
        <p className="text-[#606161] font-bold p-0.5">QUALITY YOU CAN FEEL</p>
        <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold-[500] md:py-3">
          Summer Essentials
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl sm:text-xl font-bold-[300]">
            sandals, athletic shoes, accessories
          </p>
        </div>

        <button className="bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3  ">
          SHOP COLLECTION
        </button>
      </div>
    </div>
  );
};

export default hero;
