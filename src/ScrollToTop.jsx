import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    });
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  return (
    <div>
      <div>
        {toggle && (
          <FaArrowCircleUp
            onClick={scrollTop}
            className="text-5xl font-bold text-red-500 cursor-pointer fixed right-10 bottom-10"
          />
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
