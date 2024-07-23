import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="bg-blue-600 flex flex-col items-center py-10">
        <div>
          <h1 className="text-4xl font-bold font-roboto">
            Branding <span className="text-white">Agency</span>{" "}
          </h1>
        </div>
        <div className="flex gap-8 py-6">
          <FaFacebook className="text-4xl cursor-pointer text-red-500 hover:text-white" />
          <FaInstagram className="text-4xl cursor-pointer text-red-500 hover:text-white" />
          <FaTwitter className="text-4xl cursor-pointer text-red-500 hover:text-white" />
          <FaYoutube className="text-4xl cursor-pointer text-red-500 hover:text-white" />
        </div>
        <div className="flex md:gap-10 gap-6">
          <Link
            className="text-white md:text-xl font-bold hover:text-black text-roboto text-md"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-white md:text-xl font-bold hover:text-black text-roboto text-md"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-white md:text-xl font-bold hover:text-black text-roboto text-md"
            to="/Services"
          >
            Services
          </Link>
          <Link
            className="text-white md:text-xl font-bold hover:text-black text-roboto text-md"
            to="/teams"
          >
            Teams
          </Link>
          <Link
            className="text-white md:text-xl font-bold hover:text-black text-roboto text-md"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
