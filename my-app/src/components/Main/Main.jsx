import React, { useEffect, useState } from "react";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { SlGlobeAlt } from "react-icons/sl";

import CarouselTwo from "../CarouselTwo/CarouselTwo";

export const Main = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 250) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      {" "}
      <div
        className={`${
          showContent
            ? "transform translate-y-0 opacity-100 transition-all duration-700"
            : "transform translate-y-0 opacity-100"
        } bg-white flex justify-between h-auto p-0 m-0`}
      ></div>
      <div
        className={`${
          showContent
            ? "transform translate-y-[-30%] opacity-100 transition-all duration-700"
            : "transform translate-y-0 opacity-0"
        } bg-white flex justify-between p-3 m-0 h-auto `}
      >
        <div className="bg-white flex justify-between p-9 m-3  ">
          <div className="p-3 m-3 flex flex-col items-center text-center gap-3 text-xl font-light">
            <span className="flex justify-center items-center text-4xl">
              <SlGlobeAlt />
            </span>
            <p className=" text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio pariatur cum labore laborum! Consectetur tempore illum
              hic quisquam fugit nam dolorem nesciunt, placeat sunt delectus
              possimus officia ipsam voluptate assumenda.
            </p>
          </div>
          <div className="p-3 m-3 flex flex-col items-center text-center gap-3 text-xl font-light">
            <span className="flex justify-center items-center text-4xl">
              <PiPaperPlaneTilt />
            </span>
            <p className=" text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio pariatur cum labore laborum! Consectetur tempore illum
              hic quisquam fugit nam dolorem nesciunt, placeat sunt delectus
              possimus officia ipsam voluptate assumenda.
            </p>
          </div>
          <div className="p-3 m-3 flex flex-col items-center text-center gap-3 text-xl font-light">
            <span className="flex justify-center items-center text-4xl">
              <BsHeart />
            </span>
            <p className=" text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio pariatur cum labore laborum! Consectetur tempore illum
              hic quisquam fugit nam dolorem nesciunt, placeat sunt delectus
              possimus officia ipsam voluptate assumenda.
            </p>
          </div>
        </div>
      </div>
      <CarouselTwo />
    </>
  );
};
