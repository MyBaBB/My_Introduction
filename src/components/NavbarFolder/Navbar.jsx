// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
import { BsPersonVcard } from "react-icons/bs";
import { GiStrongMan } from "react-icons/gi";
import { LiaInfoSolid } from "react-icons/lia";
import { SiQuicklook } from "react-icons/si";
import { LiaHourglassHalfSolid } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { GrBaby } from "react-icons/gr";

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
    setBurgerClass("burger-bar unclicked");
  };



  
  return (
    <div className="">
      <div className="navWrapper absolute   z-1">
        <nav>
          <div className="burger-menu z-0  md:hidden " onClick={updateMenu}>
            <div
              className={burger_class}
              style={{
                backgroundColor: "#bfdbfe",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
              }}
            ></div>
            <div
              className={burger_class}
              style={{
                backgroundColor: "#bfdbfe",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
              }}
            ></div>
            <div
              className={burger_class}
              style={{
                backgroundColor: "#bfdbfe",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
              }}
            ></div>
          </div>
        </nav>



        <div className={menu_class}>
          <section id="mobile-menu" className="relative text-2xl m-auto flex  ">
            <div
              className="menuBackGround relative top-0 z-[1] w-fit  
               px-[1rem]   text-center  "
            >
              <nav
                className="mobileNav   justify-center relative my-auto    flex min-h-screen flex-col  "
                aria-label="mobile"
                 >   
              
              {/* xxxxxxx the mobile buttons xxxxxxxxx */}
                <p id="mobile-menu" className="relative flex-row justify-center my-auto">
                <a
                    href="https://mybabb.github.io/My_Introduction/"
                    onClick={hideMobileMenu}
                  >
                    {" "}
                    <div
                       className="buttonStyles   origin-top animate-open-menu text-blue-200 "                    >
                      <div className="relative inline-block pl-4 ">
                        <GiStrongMan />
                      </div>
                      <span className="menuButtonWords font-Kingthings_Petrock  text-3xl  pr-6 ">
                        <u>My&nbsp;&nbsp; Resume</u>&apos;
                      </span>
                    </div>
                  </a>
                  

                  <a href="https://mybabb.com" onClick={hideMobileMenu}>
                    {" "}

                             

                    <div
                      className="buttonStyles font-LibreBaskerville   origin-top animate-open-menu text-blue-200 "
                    >
                      <div className="relative inline-block pl-4  ">
                        <BsPersonVcard />
                      </div>
                      <span className="menuButtonWords  ml-[2rem] pr-8 ">
                     MyBaBB.com
                      </span>
                    </div>
                  </a>
                  

               

                  <a
                    href="https://mybabb.github.io/About_MyBaBB/"
                    onClick={hideMobileMenu}
                  >
                    {" "}
                    <div
                       className="buttonStyles font-LibreBaskerville   origin-top animate-open-menu text-blue-200 "
                    >
                      <div className="relative inline-block pl-4 ">
                        <LiaInfoSolid />
                      </div>
                      <span className="menuButtonWords    pr-6 ">
                        About
                      </span>
                    </div>
                  </a>

                  
                  
                  <a
                    href="https://mybabb.github.io/BetterMcTransport/"
                    onClick={hideMobileMenu}
                  >
                    {" "}
                    <div
                       className="buttonStyles font-LibreBaskerville   origin-top animate-open-menu text-blue-200 ">
                      <div className="relative inline-block pl-4 pr-2 ">
                        <SiQuicklook />
                      </div>
                      <span className="menuButtonWords   pr-6 ">
                        Basic Demo
                      </span>
                    </div>
                  </a>
                  
                  <a href="https://mybabb.github.io/Franken-Timer/">
                    <div
                    className="buttonStyles font-LibreBaskerville   origin-top animate-open-menu text-blue-200 " >
                      <div className="relative inline-block pl-4 pr-2">
                        <LiaHourglassHalfSolid />
                      </div>
                      <span className="menuButtonWords   pr-6 ">
                        Special Event
                      </span>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/MyBaBB"
                    onClick={hideMobileMenu}
                  >
                    {" "}
                    <div
                       className="buttonStyles font-LibreBaskerville   origin-top animate-open-menu text-blue-200 ">
                      <div className="relative inline-block pl-4 pr-2 ">
                      <BsGithub />
                      </div>
                      <span className="menuButtonWords   pr-6 ">
                        GitHub
                      </span>
                    </div>
                  </a>
                  
                  <a href="https://mybabb.github.io/100_Bucks_Intro/" onClick={hideMobileMenu}>
                    {" "}
                    <div
                       className="buttonStyles font-LibreBaskerville   origin-top animate-open-menu text-blue-200 ">
                      <div className="relative inline-block pl-4 ">
                      <GrBaby />
                      </div>
                      <span className="menuButtonWords   pr-6 ">
                       Starter Kit
                      </span>
                    </div>
                  </a>
                  
                  <a href="#" onClick={hideMobileMenu}>
                    {" "}
                    <div
                       className="buttonStyles font-LibreBaskerville   origin-top animate-open-menu text-blue-200 ">
                      <div className="relative inline-block pl-4 ">
                        <SiTestinglibrary />
                      </div>
                      <span className="menuButtonWords   pr-6 ">
                        Kraken
                      </span>
                    </div>
                  </a>
                  
                
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
