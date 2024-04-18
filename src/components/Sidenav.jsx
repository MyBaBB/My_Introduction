/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { GiWoodCabin } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";

import { BsStack } from "react-icons/bs";
import { SiTestinglibrary } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";


const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        size={50}
        onClick={handleNav}
        className="absolute right-8 top-6 z-[99] md:hidden"
        style={{ color: "black" }}
      />
      {nav ? (
        <div className="fixed  z-20 flex h-screen w-full flex-col items-center justify-center bg-[#24558d]/90 ">
          <a
            onClick={handleNav}
            href="#"
            className="md:mt-22
           m-2 mt-[5rem]  flex w-[65%] cursor-pointer   items-center
            justify-center rounded-full bg-gradient-to-b from-white to-slate-700  p-4 shadow-lg shadow-gray-800 duration-200 ease-in hover:scale-110"
          >
            <GiWoodCabin size={20} className="text-blue-950  " /> 
            <span className="font-HoltwoodOneSC text-xl pl-4 text-blue-950 ">
              Home
            </span>
          </a>
          <a
            onClick={handleNav}
            href="#performance"
            className="m-2 flex w-[65%] cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-white to-slate-700 p-4 shadow-lg shadow-gray-800 duration-200 ease-in hover:scale-110"
          >
            <CgPerformance size={20} className="text-blue-950" />
            <span className="font-HoltwoodOneSC text-xl pl-4 text-blue-950">
              Performance 
            </span>
          </a>
          <a
            onClick={handleNav}
            href="#technologies"
            className="m-2  flex w-[65%] cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-white to-slate-700 p-4 shadow-lg shadow-gray-800 duration-200 ease-in hover:scale-110"
          >
            <GrTechnology size={20} className="text-blue-950" /> 
            <span className="font-HoltwoodOneSC text-xl pl-4 text-blue-950">
              Technologies</span>
          </a>

          <a
            onClick={handleNav}
            href="#experience"
            className="m-2 flex w-[65%] cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-white to-slate-700 p-4 shadow-lg shadow-gray-800 duration-200 ease-in hover:scale-110"
          >
            <BsStack size={20} className="text-blue-950" />
             <span className="font-HoltwoodOneSC text-xl pl-4 text-blue-950">
              Experience</span>
          </a>

          <a
            onClick={handleNav}
            href="https://resume-hub.mybabb.com/"
            className="m-2 flex w-[65%] cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-white to-slate-700 p-4 shadow-lg shadow-gray-800 duration-200 ease-in hover:scale-110"
          >
            <SiTestinglibrary size={20} className="text-blue-950 " />
            <span className="font-HoltwoodOneSC text-xl pl-4 text-blue-950">
              Kraken</span>
          </a>
        </div>
      ) : (
        ""
      )}

          </div>
  );
};

export default Sidenav;
