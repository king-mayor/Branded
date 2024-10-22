import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { FaFax } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
const BrandContact = () => {
  return (
    <div className="flex justify-center lg:flex-row flex-col items-center my-14 gap-10">
      <div data-aos="zoom-in-right" data-aos-duration="2000">
        <div className="flex gap-8 my-8 lg:flex-nowrap flex-wrap justify-center">
          <div className="bg-gray-200 text-center flex  flex-col justify-center items-center p-8 lg:w-64 lg:h-64 w-full lg:mx-0 mx-10 rounded-lg">
            <FaLocationDot className="text-5xl text-red-500 font-bold cursor-pointer hover:text-blue-600" />
            <h2 className="text-2xl font-bold font-roboto text-gray-600 py-2">
              Our Main Office
            </h2>
            <p className="text-xl font-roboto text-grey-600 leading-8">
              SoHo 94 Broadway St<br></br> New York, NY 1001
            </p>
          </div>
          <div className="bg-gray-200 text-center flex  flex-col justify-center items-center p-8 lg:w-64 lg:h-64 w-full lg:mx-0 mx-10 rounded-lg">
            <FaPhoneVolume className="text-5xl text-red-500 font-bold cursor-pointer hover:text-blue-600" />
            <h2 className="text-2xl font-bold font-roboto text-gray-600 py-2">
              Phone Number
            </h2>
            <p className="text-xl font-roboto text-grey-600">
              234-9876-5400888-<br></br>0123-4567 (Toll Free)
            </p>
          </div>
        </div>
        <div className="flex gap-8 lg:flex-nowrap flex-wrap justify-center">
          <div className="bg-gray-200 text-center flex  flex-col justify-center items-center p-8 lg:w-64 w:h-64 lg:mx-0 w-full mx-10 rounded-lg">
            <FaFax className="text-5xl text-red-500 font-bold cursor-pointer hover:text-blue-600" />
            <h2 className="text-2xl font-bold font-roboto text-gray-600 py-2">
              Fax
            </h2>
            <p className="text-xl font-roboto text-grey-600">1-234-567-8900</p>
          </div>
          <div className="bg-gray-200 text-center flex  flex-col justify-center items-center p-8 lg:w-64 lg:h-64 lg:mx-0 mx-10 w-full rounded-lg">
            <MdMarkEmailRead className="text-5xl text-red-500 font-bold cursor-pointer hover:text-blue-600" />
            <h2 className="text-2xl font-bold font-roboto text-gray-600 py-2">
              Email
            </h2>
            <p className="text-xl font-roboto text-grey-600">
              company@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* {Input Section} */}
      <div
        className="lg:w-1/2 w-full lg:px-0 px-10"
        data-aos="zoom-in-left"
        data-aos-duration="2000"
      >
        <div className="bg-blue-600 py-20 rounded-lg">
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
  );
};

export default BrandContact;
