import React from "react";
import team3 from "./assets/team3.jpg";
const Hero = () => {
  return (
    <div className="pt-14">
      <div className="flex justify-center items-center bg-blue-600 py-20 lg:flex-row flex-col">
        <div>
          <img
            className="md:w-[500px] md:h-[450px] w-[300px] h-[300px]"
            src={team3}
            alt="hero-img"
          />
        </div>
        <div className="md:w-[500px] w-[300px] bg-white md:py-20 md:px-12 py-4 px-6">
          <h1 className="text-blue-600 md:text-6xl text-3xl font-bold font-roboto py-12">
            Branding<br></br>Agency
          </h1>
          <p className="text-md font-roboto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            explicabo officiis, corporis nobis vero corrupti enim minima beatae
            vel sunt quasi, tenetur id fuga architecto dicta cumque asperiores
            rerum. Nostrum.
          </p>
          <button
            className="text-white bg-blue-600 py-4 px-12 rounded-lg uppercase 
          cursor-pointer lg:mt-6 lg:mb-0 mb-6 mt-12 font-bold font-roboto hover:bg-red-500 hover:text-white hover:translate-y-1"
          >
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
