// eslint-disable-next-line no-unused-vars
import React from "react";
// import CssLogo from "../img/cssLogoHeight80px.png";

import NewMe from "../img/NewMe.png";
import ScubaMask from "./ScubaNavFolder/ScubaMask";
import ContactButton from "./ContactButton";
import EmailButton from "./EmailButton";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
const header = () => {
  return (
    <div>
      <header
        className="header relative  flex h-[100px] w-screen items-center bg-[#24558d]
        text-[2rem] sm:text-[2.5rem] lg:text-[3rem]  "
      >
        <img
          src={NewMe}
          alt="New Me"
          width={80}
          height={80}
          className="absolute left-2 top-2 z-[50]"
        />

        <div className="m-auto w-fit scale-[50%] xxs:scale-[60%] xs:scale-[80%] sm:scale-[100%] md:-translate-x-4  ">
          <h1 className="z-50 mb-[.5rem] mt-[-.2rem] text-center font-Caprasimo  text-amber-300 ">
            Brett Baker
          </h1>
          <div className="LogoItems relative mt-[-1rem] flex justify-center space-x-2 ">
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
      </header>

      <div className="relative flex items-center justify-between p-4 ">
        <ScubaMask />
        <ContactButton />

        <EmailButton />
      </div>
    </div>
  );
};

export default header;
