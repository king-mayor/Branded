import React, { useState } from "react";
import background1 from "./assets/background1.jpg";
import background2 from "./assets/background2.jpg";
import background3 from "./assets/background3.jpg";
import worker1 from "./assets/worker1.jpg";
import worker2 from "./assets/worker2.jpg";
import worker3 from "./assets/worker3.jpg";
import team1 from "./assets/team1.jpg";
import team2 from "./assets/team2.jpg";
import team3 from "./assets/team3.jpg";
import team4 from "./assets/team4.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from "./Navbar";
import { LuConstruction } from "react-icons/lu";
import { MdConstruction } from "react-icons/md";
import { SiProtools } from "react-icons/si";
import { MdOutlineEngineering } from "react-icons/md";
import ScrollToTop from "./ScrollToTop";
import { RotateLoader } from "react-spinners";
import { useEffect } from "react";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <RotateLoader color="red" size={36} />
        </div>
      ) : (
        <div>
          <div>
            <Navbar />
          </div>
          <div className="">
            <div className="flex justify-center lg:flex-row flex-col items-center my-24 overflow-x-hidden">
              <div className="" data-aos="slide-right" data-aos-duration="2000">
                <img
                  className="lg:w-full lg:h-[600px] w-full"
                  src={background1}
                  alt="Member"
                />
              </div>
              <div
                className="bg-gray-600 lg:w-[500px] lg:h-[600px] w-full p-10"
                data-aos="slide-left"
                data-aos-duration="2000"
              >
                <h1 className="lg:text-4xl text-2xl font-bold font-roboto uppercase text-gray-100 text-center">
                  Our story
                </h1>
                <p className="lg:text-xl text-lg font-roboto leading-8 text-gray-100 pt-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi harum omnis sapiente recusandae magni neque dolorem
                  quas soluta a hic! Nihil impedit, dolor voluptatem maiores
                  veritatis tempora animi praesentium dolore, laudantium nisi
                  suscipit quod sequi deleniti facere libero officia itaque
                  sapiente tenetur molestiae temporibus officiis illo sed id
                  enim. Atque ex eaque corrupti, fuga consectetur facere aut
                  ipsa eligendi eos!
                </p>
              </div>
            </div>
            {/* {Tools Section} */}
            <div className="flex justify-around items-center md:flex-nowrap flex-wrap lg:gap-0 gap-10">
              <div
                className="w-64"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <LuConstruction className="text-5xl font-bold text-gray-500" />
                <h2 className="text-3xl font-bold font-roboto text-gray-600 py-2">
                  lorem ipsum
                </h2>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam saepe eveniet nesciunt cum, et aliquid.
                </p>
              </div>
              <div
                className="w-64"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <MdConstruction className="text-5xl font-bold text-gray-500" />
                <h2 className="text-3xl font-bold font-roboto text-gray-600 py-2">
                  lorem ipsum
                </h2>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam saepe eveniet nesciunt cum, et aliquid.
                </p>
              </div>
              <div
                className="w-64"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <SiProtools className="text-5xl font-bold text-gray-500" />
                <h2 className="text-3xl font-bold font-roboto text-gray-600 py-2">
                  lorem ipsum
                </h2>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam saepe eveniet nesciunt cum, et aliquid.
                </p>
              </div>
              <div
                className="w-64"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <MdOutlineEngineering className="text-5xl font-bold text-gray-500" />
                <h2 className="text-3xl font-bold font-roboto text-gray-600 py-2">
                  lorem ipsum
                </h2>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam saepe eveniet nesciunt cum, et aliquid.
                </p>
              </div>
            </div>
            {/* {Preconstruction Planning} */}
            <div
              className="flex my-20 lg:justify-start lg:flex-row flex-col"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            >
              <div className="">
                <img
                  className="lg:w-[600px] lg:h-[500px] w-full"
                  src={background2}
                  alt="background2"
                />
              </div>
              <div className="bg-gray-600 lg:w-[500px] lg:h-[500px] w-full p-10">
                <h1 className="text-4xl font-bold text-gray-100 font-roboto text-center">
                  Prebranding<br></br>Planning
                </h1>
                <p className="text-lg font-roboto text-gray-100 leading-8 pt-10">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  tempora neque voluptate, quae aliquid consequuntur earum sunt
                  perspiciatis. Ratione cupiditate repellendus, ut
                  exercitationem excepturi culpa quos, ducimus neque libero
                  aperiam adipisci ab esse obcaecati mollitia dignissimos eius
                  officiis perspiciatis corporis voluptate suscipit quia! Labore
                  ab neque necessitatibus voluptate libero illum.
                </p>
              </div>
            </div>
            {/* {Architectural Modelling} */}
            <div
              className="flex my-20 lg:justify-end lg:flex-row flex-col-reverse"
              data-aos="zoom-in-left"
              data-aos-duration="2000"
            >
              <div className="bg-gray-600 lg:w-[500px] lg:h-[500px] w-full p-10">
                <h1 className="text-4xl font-bold text-gray-100 font-roboto text-center">
                  Architectural Modelling
                </h1>
                <p className="text-lg font-roboto text-gray-100 leading-8 pt-10">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor, quasi tenetur? Similique praesentium hic numquam optio
                  iure inventore placeat, ipsam corporis consequatur! Minima eum
                  quis dolores reprehenderit? Harum ad ullam vitae tempore,
                  saepe provident facilis nobis ducimus laboriosam adipisci
                  laudantium sed quas laborum. Cum rem vel fuga aliquam
                  reprehenderit nisi!
                </p>
              </div>
              <div>
                <img
                  className="lg:w-[600px] lg:h-[500px] w-full"
                  src={background3}
                  alt="background3"
                />
              </div>
            </div>
            {/* {Founders Section} */}
            <div className="bg-gray-200 py-20">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-600 font-roboto pb-10">
                  Founders
                </h1>
              </div>
              <div className="flex justify-center text-center lg:flex-nowrap flex-wrap gap-10">
                <div
                  className="bg-gray-600 text-gray-100"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <img className="w-80 h-80" src={worker1} alt="founder1" />
                  <h2 className="text-3xl font-bold font-roboto py-6">
                    Alex Miller
                  </h2>
                  <p className="text-2xl font-bold">CEO</p>
                  <div className="flex text-center justify-center py-6 gap-6">
                    <FaFacebookF className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaTwitter className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaGooglePlusG className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaLinkedinIn className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                  </div>
                </div>
                <div
                  className="bg-gray-600 text-gray-100"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <img className="w-80 h-80" src={worker2} alt="founder1" />
                  <h2 className="text-3xl font-bold font-roboto py-6">
                    Rob Manson
                  </h2>
                  <p className="text-2xl font-bold">CMO</p>
                  <div className="flex text-center justify-center py-6 gap-6">
                    <FaFacebookF className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaTwitter className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaGooglePlusG className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaLinkedinIn className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                  </div>
                </div>
                <div
                  className="bg-gray-600 text-gray-100"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <img className="w-80 h-80" src={worker3} alt="founder1" />
                  <h2 className="text-3xl font-bold font-roboto py-6">
                    James Bricks
                  </h2>
                  <p className="text-2xl font-bold">CFO</p>
                  <div className="flex text-center justify-center py-6 gap-6">
                    <FaFacebookF className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaTwitter className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaGooglePlusG className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaLinkedinIn className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                  </div>
                </div>
                <div
                  className="bg-gray-600 text-gray-100"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <img className="w-80 h-80" src={team4} alt="founder1" />
                  <h2 className="text-3xl font-bold font-roboto py-6">
                    Rebbeca Lissner
                  </h2>
                  <p className="text-2xl font-bold">CTO</p>
                  <div className="flex text-center justify-center py-6 gap-6">
                    <FaFacebookF className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaTwitter className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaGooglePlusG className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                    <FaLinkedinIn className="text-3xl font-bold text-gray-100 cursor-pointer hover:text-red-500" />
                  </div>
                </div>
              </div>
            </div>
            {/* {Testimonial Section} */}
            <div className="bg-slate-600 py-12">
              <div
                className="flex flex-col justify-center items-center text-center px-12"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <div>
                  <h1 className="font-bold lg:text-3xl text-xl font-roboto text-gray-400">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio sint blanditiis nihil excepturi molestias error
                    expedita a. Magnam, exercitationem dolores, atque veritatis
                    distinctio velit tenetur aliquam quia ipsum, saepe
                    corrupti!"
                  </h1>
                </div>
                <div className="py-6">
                  <img
                    className="lg:w-64 lg:h-64 w-32 h-32 rounded-full"
                    src={worker1}
                    alt="CEO"
                  />
                  <h2 className="lg:text-3xl text-2xl font-bold font-roboto text-slate-400 py-3 text-center">
                    LEO BROOKS
                  </h2>
                  <h4 className="lg:text-2xl text-xl font-bold font-roboto text-slate-400 text-center">
                    CEO
                  </h4>
                </div>
              </div>
            </div>
            {/* {Footer-Links} */}
            <div>
              <div className="flex text-center justify-center py-8 gap-12">
                <FaFacebookF className="text-3xl font-bold text-gray-600 cursor-pointer hover:text-red-500" />
                <FaTwitter className="text-3xl font-bold text-gray-600 cursor-pointer hover:text-red-500" />
                <FaGooglePlusG className="text-3xl font-bold text-gray-600 cursor-pointer hover:text-red-500" />
                <FaLinkedinIn className="text-3xl font-bold text-gray-600 cursor-pointer hover:text-red-500" />
              </div>
            </div>
            <div>
              <ScrollToTop />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
