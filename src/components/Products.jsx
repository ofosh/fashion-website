import React from "react";
import Slide1 from "../assets/slide-1.jpg";
import Slide2 from "../assets/slide-2.jpg";
import Slide3 from "../assets/slide-3.jpg";
import Slide4 from "../assets/slide-4.jpg";
import Slide5 from "../assets/slide-5.jpg";

const Products = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h2 className="text-center text-4xl font-medium">Trending Products</h2>
      <p className="text-center py-5">
        Vivamus consectetuer hendrerit lacus. Ut id nisl quis enim dign
      </p>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <img className="w-[100%]" src={Slide1} alt="/" />
          <p className="text-center text-lg font-400 py-2">
            VEJA VENTURI TRAINERS
          </p>
          <p className="text-center text-[#9c9494] text-lg font-medium ">
            $19.65
          </p>
        </div>
        <div>
          <img className="w-[100%]" src={Slide2} alt="/" />
          <p className="text-center text-lg font-400 py-2">
            VEJA VENTURI TRAINERS
          </p>
          <p className="text-center text-[#9c9494] text-lg font-medium ">
            $19.65
          </p>
        </div>
        <div>
          <img className="w-[100%]" src={Slide3} alt="/" />
          <p className="text-center text-lg font-400 py-2">
            VEJA VENTURI TRAINERS
          </p>
          <p className="text-center text-[#9c9494] text-lg font-medium ">
            $19.65
          </p>
        </div>
        <div>
          <img className="w-[100%]" src={Slide4} alt="/" />
          <p className="text-center text-lg font-400 py-2">
            VEJA VENTURI TRAINERS
          </p>
          <p className="text-center text-[#9c9494] text-lg font-medium ">
            $19.65
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
