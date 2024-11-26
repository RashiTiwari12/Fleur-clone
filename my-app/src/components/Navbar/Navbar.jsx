import React from "react";
import { BsCart3 } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full bg-opacity-50 text-white p-4 z-10">
      <div className="justify-between flex  ">
        <div className="p-3   text-white font-serif text-4xl font-light">
          <h1 className="ml-9">Fleur~</h1>
        </div>

        <div>
          <ul className="flex justify-between text-white p-3  gap-9 font-normal text-lg">
            <li>Home</li>
            <li>Pages</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Elements</li>
          </ul>
        </div>

        <div className=" text-white mr-9  p-3 ">
          <span className="flex justify-between gap-9 m-1 text-2xl ">
            <BsCart3 color="white" />
            <BsSearch />
            <RxHamburgerMenu />
          </span>
        </div>
      </div>

      <div class="relative">
        <hr class="border-none h-1 bg-gradient-to-b from-gray-500 to-gray-900 opacity-75" />
      </div>
    </nav>
  );
};

export default Navbar;
