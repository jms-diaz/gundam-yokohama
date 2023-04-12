import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);

    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">GFY</h1>
      <HiMenuAlt3
        size={25}
        className="z-20 text-white cursor-pointer"
        onClick={handleNav}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 top-0 left-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed text-gray-300 w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">Products</li>
          <li className="font-bold text-3xl p-8">Menu</li>
          <li className="font-bold text-3xl p-8">Images</li>
          <li className="font-bold text-3xl p-8">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
