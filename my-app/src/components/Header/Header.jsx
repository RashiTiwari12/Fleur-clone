import React from "react";
import Navbar from "../Navbar/Navbar";
import CarouselOne from "../CarouselOne/CarouselOne";

const Header = () => {
  return (
    <>
      <div className="relative">
        <div className="relative h-screen">
          <Navbar />
          <CarouselOne />
        </div>
      </div>
    </>
  );
};

export default Header;
