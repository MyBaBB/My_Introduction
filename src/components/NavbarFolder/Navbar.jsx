// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";

import NewMe from "./NewMe.png";

import { CgPerformance } from "react-icons/cg";
import { GiWoodCabin } from "react-icons/gi";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { GrTechnology } from "react-icons/gr";
import OctoGlasses from "./OctoGlasses.png";

import { BsStack } from "react-icons/bs";

import { SiTestinglibrary } from "react-icons/si";
const Navbar = () => {
  //to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //toggle burger menu classes
  const updateMenu = () => {
    if (isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass(" hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const hideMobileMenu = () => {
    setMenuClass("menu hidden");
    setIsMenuClicked(false);
  };

  return (
    <div className="">
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
          className="dataToolTip81 z-0 font-Itim  sm:block"
          data-tool-tip="My HomePage "
        >
          <img
            src={NewMe}
            alt="New Me"
            width={70}
            height={70}
            className="z-1 absolute left-1 top-1"
          />
        </div>
      </a>
      <a href="https://resume-hub.mybabb.com/">
        <div
          className="dataToolTip82 z-0 hidden font-Itim sm:block"
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
      <div className="navWrapper  -right-2 top-0 z-[1]">
        <nav>
          <div className="burger-menu z-0  sm:hidden " onClick={updateMenu}>
            <div
              className={burger_class}
              style={{
                backgroundColor: "aliceblue",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
              }}
            ></div>
            <div
              className={burger_class}
              style={{
                backgroundColor: "aliceblue",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
              }}
            ></div>
            <div
              className={burger_class}
              style={{
                backgroundColor: "aliceblue",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
              }}
            ></div>
          </div>
        </nav>

        <div className={menu_class}>
          <section
            id="mobile-menu"
            className="relative  m-auto flex  text-base"
          >
            <div
              className=" mb-2rem relative z-[1] mt-[1rem] h-fit w-fit 
              rounded-3xl bg-[#343945]  px-[2rem] text-center font-Kingthings_Petrock text-xl"
            >
              {" "}
              <p className="whitespace-nowrap pt-2 text-3xl text-white">
                Brett Baker
              </p>
              <hr />
              <p className="text-white">Resume&apos;</p>
              <nav
                className="relative mt-[-3rem] flex flex-col  justify-center  "
                aria-label="mobile"
              >
                <p id="mobile-menu">
                  <br />
                  <br />
                  <br />
                  <a href="#" onClick={hideMobileMenu}>
                    {" "}
                    <div
                      className="animate-open-menu relative flex     origin-top rounded-3xl 
                               border-2 border-gray-700 bg-gradient-to-b   from-slate-100 to-slate-500
                               px-1 py-1 text-center text-black
                               shadow-md shadow-gray-300  "
                    >
                      <div className="relative inline-block pl-4 pt-1 text-varDARKWING ">
                        <GiWoodCabin size={20} />
                      </div>
                      <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                        Home
                      </span>
                    </div>
                  </a>
                  <br />

                  <a href="#performance" onClick={hideMobileMenu}>
                    {" "}
                    <div
                      className="animate-open-menu relative flex     origin-top rounded-3xl 
                                 border-2 border-gray-700 bg-gradient-to-b   from-slate-100 to-slate-500
                                 px-1 py-1 text-center text-black
                                 shadow-md shadow-gray-300  "
                    >
                      <div className="relative inline-block pl-4 pt-1 text-varDARKWING ">
                        <CgPerformance size={20} />
                      </div>
                      <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                        &nbsp;&nbsp;Performance
                      </span>
                    </div>
                  </a>
                  <br />

                  <a href="#technologies" onClick={hideMobileMenu}>
                    {" "}
                    <div
                      className="animate-open-menu relative flex     origin-top rounded-3xl 
                                 border-2 border-gray-700 bg-gradient-to-b   from-slate-100 to-slate-500
                                 px-1 py-1 text-center text-black
                                 shadow-md shadow-gray-300  "
                    >
                      <div className="relative inline-block pl-4 pt-1 text-varDARKWING ">
                        <GrTechnology size={20} />
                      </div>
                      <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                        Technologies
                      </span>
                    </div>
                  </a>

                  <br />
                  <a href="#experience" onClick={hideMobileMenu}>
                    {" "}
                    <div
                      className="animate-open-menu relative flex     origin-top rounded-3xl 
                                 border-2 border-gray-700 bg-gradient-to-b   from-slate-100 to-slate-500
                                 px-1 py-1 text-center text-black
                                 shadow-md shadow-gray-300  "
                    >
                      <div className="relative inline-block pl-4 pr-2 pt-1 text-varDARKWING ">
                        <BsStack size={20} />
                      </div>
                      <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                        Experience
                      </span>
                    </div>
                  </a>

                  <br />

                  <a
                    href="https://resume-hub.mybabb.com/"
                    onClick={hideMobileMenu}
                  >
                    {" "}
                    <div
                      className="animate-open-menu relative flex     origin-top rounded-3xl 
                                 border-2 border-gray-700 bg-gradient-to-b   from-slate-100 to-slate-500
                                  px-1 py-1 text-center text-black
                                  shadow-md shadow-gray-300  "
                    >
                      <div className="relative inline-block pl-4 pt-1 text-varDARKWING ">
                        <SiTestinglibrary />
                      </div>
                      <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                        Kraken
                      </span>
                    </div>
                  </a>
                  <br />
                </p>
              </nav>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
