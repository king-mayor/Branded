import React from "react";
import { SiCoinmarketcap } from "react-icons/si";
import { PiStrategyBold } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import Branding3 from "./assets/Branding3.jpg";
const Brand = () => {
  return (
    <div>
      <div className="flex justify-around items-center px-14 lg:flex-row flex-col">
        <div className="lg:w-1/2">
          <h1 className="md:text-5xl font-bold font-roboto text-4xl leading-10">
            Boost Your Brand<br></br> With These Key<br></br> Features
          </h1>
          <div className="flex gap-10 py-10 md:flex-row flex-col">
            <div>
              <PiStrategyBold className="text-red-500" size={64} />
              <h3 className="text-3xl font-medium">Strategy</h3>
            </div>
            <div>
              <SiCoinmarketcap className="text-red-500" size={64} />
              <h3 className="text-3xl font-medium">Market</h3>
            </div>
            <div>
              <MdOutlineDesignServices className="text-red-500" size={64} />
              <h3 className="text-3xl font-medium">Design</h3>
            </div>
          </div>
          <p className="text-lg font-roboto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, totam
            sit ratione accusantium quidem minima est explicabo exercitationem
            ullam harum perferendis commodi, sed, atque ab laborum ad minus
            laboriosam consequuntur!
          </p>
          <button
            className="text-white bg-blue-600 py-4 px-12 rounded-lg uppercase 
          cursor-pointer lg:mt-6 lg:mb-0 mb-6 mt-12 font-bold font-roboto hover:bg-red-500 hover:text-white"
          >
            read more
          </button>
        </div>
        <div>
          <img className="" src={Branding3} alt="Branding-img" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
