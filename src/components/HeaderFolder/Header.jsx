// eslint-disable-next-line no-unused-vars
import React from "react";
import { GrReactjs } from "react-icons/gr";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import NewMe from "./NewMe.png";
import OctoGlasses from "./OctoGlasses.png";

import Navbar from "../NavbarFolder/Navbar";
const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="headerWrapper relative flex h-[80px] justify-center ">
        <div className="m-auto w-fit scale-[50%] xxs:scale-[60%] xs:scale-[80%] sm:scale-[100%]    ">
          <h1 className="mb-[1.5rem] mt-[-.2rem] pb-1 text-center font-Caprasimo   text-3xl text-amber-300  xs:mb-[.5rem] ">
            Brett Baker
          </h1>
          <div className="LogoItems relative mt-[-1rem]  flex justify-center space-x-2 ">
            <span className="inline-block">
              <GrReactjs
                size={35}
                className="reactSpin bg-transparent text-[#01b9f1]"
              />
            </span>
            <span className="inline-block">
              <TbBrandHtml5
                size={35}
                className="bg-transparent text-[rgb(226,60,35)]"
              />
            </span>
            <span className="inline-block">
              <TbBrandJavascript
                size={35}
                className="bg-transparent text-[#e6bb2e]"
              />
            </span>
            <span className="inline-block">
              <TbBrandCss3
                size={35}
                className="bg-transparent text-[#93c7ed]"
              />
            </span>
            <span className="inline-block">
              <SiTailwindcss
                size={35}
                className="bg-transparent text-[#00ffff]"
              />
            </span>
          </div>
        </div>
      </div>
      <a href="https://mybabb.com">
        <div
          className="dataToolTip81 z-4 hidden font-Itim sm:block"
          data-tool-tip="My HomePage "
        >
          <img
            src={NewMe}
            alt="New Me"
            width={70}
            height={70}
            className="z-4 absolute left-1 top-1"
          />
        </div>
      </a>
      <a href="https://resume-hub.mybabb.com/">
        <div
          className="dataToolTip82 z-0 hidden font-Itim md:block"
          data-tool-tip="Portfolio Hub "
        >
          <div className="z-5 absolute -top-7 right-4 p-1">
            <div
              className="octoGlasses z-5 relative mb-4 mt-[2rem] h-[70px] w-[70px] rounded-full p-[5px] pb-1
                         hover:bg-varMEDBEAKTOP active:bg-varLIGHTBLUEFEATHER"
              style={{
                position: "relative",
                display: "block",
                boxShadow:
                  "inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={OctoGlasses}
                alt="OctoGlasses"
                width={75}
                height={75}
                className="octoGlasses absolute left-[-1px] top-[-1px]"
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Header;
