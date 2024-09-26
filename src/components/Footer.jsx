import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-16 px-4  gap-8 text-gray-300">
      <div className=" flex md:flex-col-1 justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">CONTACT</h6>
          <ul>
            <li className="py-2 text-sm">
              Address :
              <span className="text-gray-400 ml-2">
                58 Howard Street #2 San Francisco
              </span>
            </li>
            <li className="py-2 text-sm">
              Email :
              <span className="text-gray-400 ml-2">contact@ofosh.com</span>
            </li>
            <li className="py-2 text-sm">
              Open Hours :
              <span className="text-gray-400 ml-2">
                Monday – Saturday: 8:00 am – 4:00pm
              </span>
            </li>
            <li className="py-2 text-sm">
              Sunday : <span className="text-gray-400 ml-2">Close</span>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-gray-400">HELP</h6>
          <ul>
            <li className="py-2 text-sm">Contact Us</li>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Reviews</li>
            <li className="py-2 text-sm">Terms of Service</li>
            <li className="py-2 text-sm">Refund Policy</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-gray-400">SERVICES</h6>
          <ul>
            <li className="py-2 text-sm">Sales</li>
            <li className="py-2 text-sm">Quick Ship</li>
            <li className="py-2 text-sm">New Designs</li>
            <li className="py-2 text-sm">Protection Plan</li>
            <li className="py-2 text-sm">Gift Cards</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-gray-400">SUBSCRIBE</h6>
          <p className="mt-2">
            Be the first to hear about new arrivals, sales and exclusive of
          </p>
          <div className="flex items-center py-6">
            <input
              type="text"
              className="w-full p-2"
              placeholder="Enter Address"
            />
            <button className="bg-[#00df9a] text-black font-bold p-2">
              Submit
            </button>
          </div>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
