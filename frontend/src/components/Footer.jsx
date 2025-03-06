import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logoo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 text-justify">
          At Dressbay, we bring fashion closer to you with a curated selection of stylish and high-quality apparel. From trendy outfits to timeless classics, we offer something for every occasion. Shop with confidence and enjoy a seamless experience with secure payments, fast delivery, and exceptional customer support. Stay fashionable, stay confident—only at Dressbay!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+94-212-456-7890</li>
            <li>Contact@drassbay.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ dressbay.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
