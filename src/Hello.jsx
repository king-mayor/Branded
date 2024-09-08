import React from "react";
import Banner2 from "./assets/Branding2.jpg";

const Hello = () => {
  return (
    <div>
      <div className="flex justify-bwtween items-center py-10 px-12 lg:flex-row flex-col lg:gap-0 gap-10">
        <div data-aos="slide-right" data-aos-duration="2000">
          <img className="" src={Banner2} alt="Banner-img" />
        </div>
        <div data-aos="slide-left" data-aos-duration="2000">
          <h1 className="text-black md:text-6xl text-4xl font-bold font-roboto">
            Hello. We've been<br></br> expecting you
          </h1>
          <p className="text-lg pt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, totam
            sit ratione accusantium quidem minima est explicabo exercitationem
            ullam harum perferendis commodi, sed, atque ab laborum ad minus
            laboriosam consequuntur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
