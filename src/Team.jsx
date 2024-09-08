import React from "react";
import team1 from "./assets/team1.jpg";
import team2 from "./assets/team2.jpg";
import team3 from "./assets/team3.jpg";
import team4 from "./assets/team4.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Team = () => {
  return (
    <div className=" bg-blue-600 py-14">
      <div>
        <h1 className="text-4xl text-white text-roboto font-bold text-center">
          Our Teams
        </h1>
        <p className="text-white text-lg text-center py-8 px-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
          suscipit quo ullam reiciendis blanditiis provident eligendi pariatur
          delectus! Facere a at soluta officiis provident veniam atque quam
          illo.
        </p>
        <div className="flex justify-around lg:flex-row flex-col gap-10 px-6">
          <div
            className="bg-white flex justify-center items-center flex-col p-6 rounded-lg"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              className="w-32 h-32 rounded-full cursor-pointer hover:translate-y-1"
              src={team1}
              alt="team1"
            />
            <h2 className="text-bold text-2xl text-roboto py-2">
              Priscilla Jones
            </h2>
            <h3 className="text-xl text-gray-600 font-semibold">
              Web Developer
            </h3>
            <p className="text-md py-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
              totam sit ratione accusantium quidem minima
            </p>
            <div className="flex gap-6 text-2xl text-red-500">
              <FaFacebook className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaInstagram className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaTwitter className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaYoutube className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
            </div>
          </div>
          <div
            className="bg-white flex justify-center items-center flex-col p-6 rounded-lg"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              className="w-32 h-32 rounded-full cursor-pointer hover:translate-y-1"
              src={team2}
              alt="team2"
            />
            <h2 className="text-bold text-2xl text-roboto py-2">
              Traversy Baker
            </h2>
            <h3 className="text-xl text-gray-600 font-semibold">
              Graphics Designer
            </h3>
            <p className="text-md py-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
              totam sit ratione accusantium quidem minima
            </p>
            <div className="flex gap-6 text-2xl text-red-500">
              <FaFacebook className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaInstagram className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaTwitter className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaYoutube className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
            </div>
          </div>
          <div
            className="bg-white flex justify-center items-center flex-col p-6 rounded-lg"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              className="w-32 h-32 rounded-full cursor-pointer hover:translate-y-1"
              src={team3}
              alt="team3"
            />
            <h2 className="text-bold text-2xl text-roboto py-2">
              Villa Junior
            </h2>
            <h3 className="text-xl text-gray-600 font-semibold">
              UI/UX Designer
            </h3>
            <p className="text-md py-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
              totam sit ratione accusantium quidem minima
            </p>
            <div className="flex gap-6 text-2xl text-red-500">
              <FaFacebook className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaInstagram className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaTwitter className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaYoutube className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
            </div>
          </div>
          <div
            className="bg-white flex justify-center items-center flex-col p-6 rounded-lg"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              className="w-32 h-32 rounded-full cursor-pointer hover:translate-y-1"
              src={team4}
              alt="team4"
            />
            <h2 className="text-bold text-2xl text-roboto py-2">
              Victoria Wilfred
            </h2>
            <h3 className="text-xl text-gray-600 font-semibold">
              Data Analyst
            </h3>
            <p className="text-md py-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
              totam sit ratione accusantium quidem minima
            </p>
            <div className="flex gap-6 text-2xl text-red-500">
              <FaFacebook className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaInstagram className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaTwitter className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
              <FaYoutube className="cursor-pointer hover:text-blue-600 hover:translate-y-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
