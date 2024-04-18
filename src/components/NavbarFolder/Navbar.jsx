// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
 
import MobileMenu from "./MobileMenu";
 
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

  return (
    <div className="navWrapper relative bg-gradient-to-b from-[#1a3a5f] to-[#151a27]">
     
      <nav>
        <div className="burger-menu sm:hidden " onClick={updateMenu}>
          <div
            className={burger_class}
            style={{
              backgroundColor: "red",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            className={burger_class}
            style={{
              backgroundColor: "white",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            className={burger_class}
            style={{
              backgroundColor: "Blue",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
        </div>
      </nav>
      <h1 className="hiddenH1 absolute sm:hidden">
        <div className=" rounded-xl border-[1px] border-transparent  xxs:border-varLIGHTBLUEFEATHER">
          <div className="rounded-xl border-[2px] border-transparent  xxs:border-black">
            <div
              className="rounded-xl border-[1px] border-transparent  p-2
                            xxs:border-varLIGHTBLUEFEATHER xxs:bg-gray-700"
            >
              <span
                className="font-Aclonica w-fit  whitespace-nowrap text-[12px] 
                           text-blue-200   xs:text-3xl"
              >
                MyBabb Web Development
              </span>
            </div>
          </div>
        </div>
      </h1>
      <div className={menu_class}>
        <MobileMenu />
      </div>
    
    </div>
  );
};

export default Navbar;
