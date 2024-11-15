import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume, FaVoicemail } from "react-icons/fa";
import { FaFax } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import background2 from "./assets/contactbackground2.jpg";
import ScrollToTop from "./ScrollToTop";
import { HashLoader } from "react-spinners";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <HashLoader color="red" size={36} />
        </div>
      ) : (
        <div>
          <div>
            <div>
              <Navbar />
            </div>
            {/* {Contact Background} */}
            <div className="bg-[url('./assets/contactbackground2.jpg')] w-full h-[500px] my-24 bg-cover bg-no-repeat bg-center">
              <h1
                className="lg:text-6xl text-4xl text-roboto text-gray-600 flex justify-center items-center font-bold uppercase py-10"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                contact us
              </h1>
            </div>
            {/* {Contact Information} */}
            <div className="flex lg:justify-around justify-center lg:flex-row flex-col items-center my-14 gap-10 px-10">
              <div
                className="lg:w-1/2 w-full"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div>
                  <h2 className="font-bold font-roboto lg:text-4xl text-3xl capitalize">
                    Talk with us
                  </h2>
                  <p className="lg:text-2xl text-lg text-roboto text-gray-600 py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, facere sint at, recusandae iusto labore expedita
                    itaque in ad earum aspernatur voluptate. Voluptatem nisi
                    saepe illo rerum consequuntur maxime consequatur.
                  </p>
                </div>
                <div className="flex gap-2 py-2">
                  <div className="">
                    <FaLocationDot className="text-xl text-red-500 cursor-pointer hover:text-blue-600" />
                  </div>
                  <div>
                    <p className="lg:text-xl text-lg text-black font-bold">
                      600 Chinda Road, Off Paroko Road, Lagos
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 py-2">
                  <div>
                    <FaPhoneVolume className="text-xl text-red-500 cursor-pointer hover:text-blue-600" />
                  </div>
                  <div>
                    <p className="lg:text-xl text-lg text-black font-bold">
                      234-9876-5400888
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 py-2">
                  <div>
                    <MdMarkEmailRead className="text-2xl text-red-500 cursor-pointer hover:text-blue-600" />
                  </div>
                  <div>
                    <p className="lg:text-xl text-lg text-black font-bold">
                      Getbrandezx@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* {Input Section} */}
              <div
                className="lg:w-1/2 w-full lg:px-0 px-2"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
              >
                <div className="bg-gray-600 py-20 rounded-lg">
                  <h1 className="lg:text-5xl text-3xl font-roboto font-bold capitalize text-center pb-12 text-gray-100">
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
          {/* DEDICATION */}
          <div className="">
            <h2 className="text-md font-bold font-roboto text-gray-600 text-center py-3">
              &copy;2024 Mayor Odegbaro
            </h2>
          </div>
          <div>
            <ScrollToTop />
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
