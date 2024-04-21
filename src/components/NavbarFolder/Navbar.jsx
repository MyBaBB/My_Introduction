// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
import { CgPerformance } from "react-icons/cg";
import { GiWoodCabin } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
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
    setBurgerClass("burger-bar unclicked");
  };



  
  return (
    <div className="">
      <div className="navWrapper  -right-2 top-0 z-1">
        <nav>
          <div className="burger-menu z-0  md:hidden " onClick={updateMenu}>
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
              className=" mb-2rem relative z-1 mt-[1rem] h-fit w-fit 
              rounded-3xl border-2  border-slate-700 bg-[#343945] px-[2rem] text-center font-Kingthings_Petrock text-xl"
            >
              {" "}
              <p className="whitespace-nowrap pt-2 text-3xl text-white">
                Brett Baker
              </p>
              <hr className=" m-auto h-[3px] w-[80%] rounded-xl border-[.75px] border-slate-400 bg-slate-500 shadow-xl shadow-black" />
              <p className="mt-2 text-white">Resume&apos;</p>
              <nav
                className="relative mt-[-3rem] flex flex-col  justify-center  "
                aria-label="mobile"
              >
                <p id="mobile-menu">
                  <br />
                  <br />
                  <br />
                  <a href="#" onClick={hideMobileMenu  }>
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
                      <span className=" m-auto  pr-6 hover:text-varDARKWING ">
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
                      <span className=" m-auto  pr-6 hover:text-varDARKWING ">
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
                      <span className=" m-auto  pr-6 hover:text-varDARKWING ">
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
                      <span className=" m-auto  pr-6 hover:text-varDARKWING ">
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
                      <span className=" m-auto  pr-6 hover:text-varDARKWING ">
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
