import React from "react";
import Instagram1 from "../assets/Instagram-1.jpg";
import Instagram2 from "../assets/Instagram-2.jpg";
import Instagram3 from "../assets/Instagram-3.jpg";
import Instagram4 from "../assets/Instagram-4.jpg";

const Features = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h2 className="text-center text-4xl font-medium">#beginningboutique</h2>
      <p className="text-center py-5">
        Follow @beginningboutique on Instagram and tag us in your pictures
      </p>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <img className="w-[100%]" src={Instagram1} alt="/" />
        </div>
        <div>
          <img className="w-[100%]" src={Instagram2} alt="/" />
        </div>
        <div>
          <img className="w-[100%]" src={Instagram3} alt="/" />
        </div>
        <div>
          <img className="w-[100%]" src={Instagram4} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Features;
