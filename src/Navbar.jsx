import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { FaFax } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white">
        <div className="flex md:justify-around text-center items-center border-b-2 border-gray-200 py-3 justify-between relative">
          <div>
            <h1 className="font-bold md:text-4xl font-roboto text-xl">
              Branding<span className="text-blue-600">Agency</span>
            </h1>
          </div>
          <div className="font-bold text-md uppercase text-gray-700 md:flex flex-row gap-12 hidden">
            <Link to="/" className="hover:border-b-2 hover:border-red-500">
              Home
            </Link>
            <Link to="/about" className="hover:border-b-2 hover:border-red-500">
              About
            </Link>
            <Link
              to="/services"
              className="hover:border-b-2 hover:border-red-500"
            >
              Services
            </Link>
            <Link to="/teams" className="hover:border-b-2 hover:border-red-500">
              Teams
            </Link>
            <Link
              to="/contact"
              className="hover:border-b-2 hover:border-red-500"
            >
              Contact
            </Link>
          </div>
          <div className="lg:flex hidden">
            <button
              className="bg-red-500 text-white text-lg cursor-pointer
           py-2 px-5 rounded-full font-bold uppercase hover:bg-blue-600 hover:translate-y-1"
              onClick={() => setModal(true)}
            >
              book now
            </button>
          </div>
          {/* {Mobile Menu} */}

          {menu && (
            <div className="md:hidden flex flex-col absolute top-14 bg-blue-700 w-full py-14 space-y-8 px-6 uppercase">
              <Link
                to="/"
                className="text-lg text-white font-bold text-roboto hover:bg-red-500 w-full py-2 rounded-lg"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-lg text-white font-bold text-roboto hover:bg-red-500 w-full py-2 rounded-lg"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-lg text-white font-bold text-roboto hover:bg-red-500 w-full py-2 rounded-lg"
              >
                Services
              </Link>
              <Link
                to="/teams"
                className="text-lg text-white font-bold text-roboto hover:bg-red-500 w-full py-2 rounded-lg"
              >
                Teams
              </Link>
              <Link
                to="/contact"
                className="text-lg text-white font-bold text-roboto hover:bg-red-500 w-full py-2 rounded-lg"
              >
                Contact
              </Link>
            </div>
          )}

          <div className="md:hidden cursor-pointer">
            {menu ? (
              <IoClose
                className="text-4xl text-blue-600 font-bold"
                onClick={toggleMenu}
              />
            ) : (
              <IoMenu
                className="text-4xl text-blue-600 font-bold"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>
      {/* {Modal popup} */}
      {modal && (
        <div>
          <div className="flex justify-center lg:flex-row flex-col items-center my-16 py-10 gap-10 fixed inset-0 opacity-85 bg-black z-50">
            <div className="lg:w-1/2 w-full lg:px-0 px-10">
              <div className="bg-blue-600 py-20 rounded-lg relative">
                <div className="absolute top-2 right-10 text-3xl text-gray-100">
                  <IoClose
                    className="text-4xl font-bold cursor-pointer"
                    onClick={() => setModal(false)}
                  />
                </div>
                <h1 className="text-5xl font-roboto font-bold capitalize text-center pb-12 text-gray-100">
                  contact us
                </h1>
                <div className="flex flex-col gap-8 px-10">
                  <input
                    className="border-none py-3 rounded-lg outline-none pl-2"
                    type="text"
                    placeholder="Enter your first name"
                  />
                  <input
                    className="border-none py-3 rounded-lg outline-none pl-2"
                    type="text"
                    placeholder="Enter your last name"
                  />
                  <textarea
                    className="border-none rounded-lg pl-2 outline-none py-8"
                    placeholder="Write something....."
                  ></textarea>
                  <button className="uppercase text-3xl bg-red-500 hover:bg-black text-slate-100 cursor-pointer py-3 rounded-lg">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
