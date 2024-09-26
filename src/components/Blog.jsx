import React from "react";
import Blog1 from "../assets/blog-1.jpg";
import Blog2 from "../assets/blog-2.jpg";
import Blog3 from "../assets/blog-3.jpg";

const Blog = () => {
  return (
    <div className="w-full py-16  p-4 text-white ">
      <div className="">
        <div className="flex items-center justify-between  px-14 gap-4">
          <div>
            <h2 className="text-4xl mb-2 font-semibold text-[#00df9a]">
              Our Blog
            </h2>
            <p>Cisl quis enim dignissim sagittis</p>
          </div>
          <p className="font-normal">View Post</p>
        </div>
        <div className="max-w-[1200px] grid mx-auto md:grid-cols-3 gap-8 my-6 py-4">
          <div className="cursor-pointer">
            <img
              className=" hover:scale-105 ease-in-out duration-300"
              src={Blog1}
              alt="/"
            />
            <p className="text-small my-3 uppercase ">Backpack</p>
            <h2 className="text-xl font-semibold  ">
              Fashion Editor's Essentials Spring
            </h2>
            <button className="text-[#00df9a] border-b w-[100px] font-medium my-3 mx-auto py-1">
              Read More
            </button>
          </div>
          <div className="cursor-pointer">
            <img
              className=" hover:scale-105 ease-in-out duration-300"
              src={Blog2}
              alt="/"
            />
            <p className="text-small my-3 uppercase ">Fashion</p>
            <h2 className="text-xl font-semibold  ">
              How to plop Hair for Bouncy, Beautiful Curls
            </h2>
            <button className="text-[#00df9a] text-center border-b w-[100px] font-medium my-3 mx-auto py-1">
              Read More
            </button>
          </div>
          <div className=" cursor-pointer">
            <img
              className=" hover:scale-105 ease-in-out duration-300"
              src={Blog3}
              alt="/"
            />
            <p className="text-small my-3 uppercase ">Lifestyle</p>
            <h2 className="text-xl font-semibold  ">
              Third Darkness And Second Dry Greater.
            </h2>
            <button className="text-[#00df9a] border-b w-[100px] font-medium my-3 mx-auto py-1">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
