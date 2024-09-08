import React from "react";
import Navbar from "./Navbar";
import babe1 from "./assets/babe1.jpg";
import babe2 from "./assets/babe2.jpg";
import babe3 from "./assets/babe3.jpg";
import babe4 from "./assets/babe4.jpg";
import babe5 from "./assets/babe5.jpg";
import guy1 from "./assets/guy1.jpg";
import guy2 from "./assets/guy2.jpg";
import guy3 from "./assets/guy3.jpg";
import guy4 from "./assets/guy4.jpg";
import guy5 from "./assets/guy5.jpg";
import ScrollToTop from "./ScrollToTop";

const Teams = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <Navbar />
          </div>
          <div
            className="my-24 bg-slate-800 flex flex-col justify-center text-center py-14 px-10"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <h2 className="lg:text-3xl text-xl font-bold font-roboto capitalize text-slate-400">
              our team
            </h2>
            <h1 className="lg:text-4xl text-2xl font-roboto capitalize text-gray-100 py-6">
              meet the team behind Branding
              <span className="text-blue-600">Agency</span>
            </h1>
            <p className="lg:text-xl text-lg font-roboto text-gray-300 leading-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quidem minima nostrum quis voluptatem atque ducimus nobis sapiente
              voluptatum recusandae odio necessitatibus illum esse, doloribus
              sed debitis voluptatibus. Obcaecati, facere?
            </p>
          </div>
          {/* {Designers Section} */}
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="lg:text-4xl text-2xl font-bold font-roboto text-gray-600 capitalize py-4">
                meet our designers
              </h1>
            </div>
            <div className="flex lg:justify-center lg:flex-row flex-col items-center gap-8">
              <div
                className="lg:w-1/4 w-full"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <img className="w-64 h-64" src={guy1} alt="designer1" />
                <h2 className="text-2xl font-roboto text-gray-600 font-bold capitalize">
                  nicolas wang
                </h2>
                <h3 className="text-cyan-700 font-roboto font-bold text-xl">
                  Lead UI/UX Designer
                </h3>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div
                className="lg:w-1/4 w-full"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <img className="w-64 h-64" src={babe1} alt="designer2" />
                <h2 className="text-2xl font-roboto text-gray-600 font-bold capitalize">
                  caitling king
                </h2>
                <h3 className="text-cyan-700 font-roboto font-bold text-xl">
                  Product Designer
                </h3>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div
                className="lg:w-1/4 w-full"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <img className="w-64 h-64" src={guy2} alt="designer3" />
                <h2 className="text-2xl font-roboto text-gray-600 font-bold capitalize">
                  zaid schwartz
                </h2>
                <h3 className="text-cyan-700 font-roboto font-bold text-xl">
                  UX Researcher
                </h3>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div
                className="lg:w-1/4 w-full"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <img className="w-64 h-64" src={guy4} alt="designer4" />
                <h2 className="text-2xl font-roboto text-gray-600 font-bold capitalize">
                  marco kelly
                </h2>
                <h3 className="text-cyan-700 font-roboto font-bold text-xl">
                  UI/UX Designer
                </h3>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          {/* {Developer Section} */}
          <div className="flex flex-col justify-center items-center py-20">
            <div>
              <h1 className="lg:text-4xl text-2xl font-bold font-roboto text-gray-600 capitalize py-4">
                meet our developers
              </h1>
            </div>
            <div className="flex lg:justify-center lg:flex-row flex-col items-center gap-8">
              <div
                className="lg:w-1/4 w-full"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <img className="w-64 h-64" src={guy3} alt="designer1" />
                <h2 className="text-2xl font-roboto text-gray-600 font-bold capitalize">
                  nicolas Gibbons
                </h2>
                <h3 className="text-cyan-700 font-roboto font-bold text-xl">
                  Full Stack Developer
                </h3>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div
                className="lg:w-1/4 w-full"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <img className="w-64 h-64" src={babe2} alt="designer2" />
                <h2 className="text-2xl font-roboto text-gray-600 font-bold capitalize">
                  sienna hewitt
                </h2>
                <h3 className="text-cyan-700 font-roboto font-bold text-xl">
                  Frontend Developer
                </h3>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div
                className="lg:w-1/4 w-full"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <img className="w-64 h-64" src={guy5} alt="designer3" />
                <h2 className="text-2xl font-roboto text-gray-600 font-bold capitalize">
                  orlando canno
                </h2>
                <h3 className="text-cyan-700 font-roboto font-bold text-xl">
                  Frontend Developer
                </h3>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div
                className="lg:w-1/4 w-full"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <img className="w-64 h-64" src={babe4} alt="designer4" />
                <h2 className="text-2xl font-roboto text-gray-600 font-bold capitalize">
                  zahra christensen
                </h2>
                <h3 className="text-cyan-700 font-roboto font-bold text-xl">
                  Backend Developer
                </h3>
                <p className="text-lg font-roboto text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* {Footer Section} */}
        <div
          className="bg-gray-600 py-4"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <h2 className="text-lg font-roboto font-bold text-gray-100 text-center">
            Designed & Developed by: Mayowa Odegbaro..
          </h2>
        </div>
        <div>
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

export default Teams;
