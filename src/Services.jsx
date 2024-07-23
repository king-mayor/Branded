import React from "react";
import Navbar from "./Navbar";
import services1 from "./assets/services1.jpg";
import services2 from "./assets/services2.jpg";
import services3 from "./assets/services3.jpg";
import brand1 from "./assets/brand1.jpg";
import ScrollToTop from "./ScrollToTop";
const Services = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex lg:justify-around lg:flex-row flex-col-reverse items-center my-20 bg-blue-600 py-14 lg:gap-0 gap-10">
        <div className="lg:w-1/2 w-full lg: lg:px-0 px-8">
          <h1 className="lg:text-5xl text-3xl font-roboto font-bold text-gray-100 capitalize">
            Increase your business with us!
          </h1>
          <p className="lg:text-xl text-md font-roboto text-gray-100 py-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            impedit vel vitae atque ab deleniti non quaerat eveniet accusamus
            veritatis delectus distinctio saepe ipsam, sapiente aspernatur animi
            fugiat eaque! Tempore.
          </p>
          <button
            className="bg-red-500 text-white hover:blue-600 outline-none
           border-none cursor-pointer p-3 hover:bg-black uppercase rounded-lg"
          >
            register now
          </button>
        </div>
        <div className="">
          <img
            className="lg:w-[600px] lg:h-[600px] w-[400px] h-[400px] rounded-full lg:px-0 px-8"
            src={services2}
            alt="services-bg"
          />
          <div className="flex text-center pt-8 justify-around">
            <div>
              <h1 className="lg:text-4xl text-2xl font-bold font-roboto text-gray-100">
                450+
              </h1>
              <p className="lg:text-xl text-lg font-semibold text-gray-100 font-roboto py-3 capitalize">
                projects done
              </p>
            </div>
            <div>
              <h1 className="lg:text-4xl text-2xl font-bold font-roboto text-gray-100">
                1.5k+
              </h1>
              <p className="lg:text-xl text-lg font-semibold text-gray-100 font-roboto py-3 capitalize">
                active users
              </p>
            </div>
            <div>
              <h1 className="lg:text-4xl text-2xl font-bold font-roboto text-gray-100">
                850+
              </h1>
              <p className="lg:text-xl text-lg font-semibold text-gray-100 font-roboto py-3 capitalize">
                lives impacted
              </p>
            </div>
            <div>
              <h1 className="lg:text-4xl text-2xl font-bold font-roboto text-gray-100">
                10k+
              </h1>
              <p className="lg:text-xl text-lg font-semibold text-gray-100 font-roboto py-3 capitalize">
                satisfied clients
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* {Brand Advertisement} */}
      <div className="flex lg:justify-center lg:flex-row flex-col items-center gap-10 pb-20">
        <div>
          <img
            className="lg:w-[400px] lg:h-[300px] w-full"
            src={brand1}
            alt="brand-img"
          />
        </div>
        <div className="lg:w-[400px] lg:h-[300px] w-full bg-gray-600 p-8">
          <h2 className="text-3xl font-bold font-roboto capitalize pt-6 text-gray-100">
            digital transformation
          </h2>
          <p className="text-lg font-roboto text-gray-100 pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            vitae atque similique aut nihil necessitatibus, incidunt excepturi
            eligendi culpa unde.
          </p>
        </div>
        <div className="lg:w-[400px] lg:h-[300px] w-full bg-gray-200 p-8">
          <h2 className="text-3xl font-bold font-roboto capitalize pt-6 text-gray-600">
            product branding
          </h2>
          <p className="text-lg font-roboto text-gray-600 pt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            nobis cumque laborum dolores quas, aliquam vitae enim explicabo
            inventore quis.
          </p>
        </div>
      </div>
      <div className="bg-blue-600 py-4">
        <h2 className="text-lg font-roboto font-bold text-gray-100 text-center">
          Designed & Developed by: Mayowa Odegbaro..
        </h2>
      </div>
      <div>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Services;
