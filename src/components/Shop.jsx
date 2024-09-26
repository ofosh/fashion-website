import React from "react";
import Shop1 from "../assets/shop-1.jpg";
import Shop2 from "../assets/shop-2.jpg";
const Shop = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <p className="text-center space-x-2 py-5">GET INSPIRED</p>
      <h2 className="text-center text-4xl font-medium">Shop The Look</h2>
      <p className="text-center py-5">
        Our in-store and online shoe shop has hundreds of chic options
      </p>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <img className="w-[100%]" src={Shop1} alt="/" />
        </div>
        <div>
          <img className="w-[100%]" src={Shop2} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
