// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MobileMenu.css";

 
 
const MobileMenu = () => {
  return (
    <div className="m-auto">
    <div
      className="hidden-square top-68   font-Orbitron w-full origin-top animate-open-menu 
                    flex-col items-center justify-center bg-black text-center"
      style={{
        boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 1)",
      }}
    >
      {/* xxxxxxxxxxxxxxxx⬆⬇️  Customized Websites Logo  xxxxxxxxxxx */}
      {/* <div
        className="mx-4 -mt-10 rounded-xl border-[1px] border-varMEDBLUEFEATHER
                          border-l-transparent  border-r-transparent"
      >
        <div
          className="border-[12px] border-black border-b-gray-800 
                          border-l-transparent border-r-transparent   border-t-gray-800"
        >
          <div
            className="customInset  border-[1px] border-black   
                          border-l-transparent border-r-transparent  bg-yellow-950  "
            style={{
              boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 1)",
            }}
          >
            <h2
              className="h2 transform-[translate(-50%, -50%)] relative 
                          left-1/2  top-[22px] z-50 m-0
                          mb-5 -translate-x-1/2 -translate-y-1/2 transform 
                          whitespace-nowrap  text-blue-200 sm:hidden xs:top-[27px] "
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
              }}
            >
              <span
                className="font-Kingthings whitespace-nowrap
                           text-[2.2rem] xs:text-[3rem] p-2"
              >
                Customized Websites
              </span>
            </h2>
          </div>
        </div>
      </div> */}
      {/* xxxxxxxxxxxxxxxx⬆️  Customized Websites Logo  xxxxxxxxxxx */}
      {/* xxxxxxxxxxxxxxxx⬇️  Buttons on Hidden Mobile Menu  xxxxxxxxxxx */}

      <nav
        className=" mt-[0rem] flex  flex-col items-center"
        aria-label="mobile"
      >
        <p id="mobile-menu-2">
          <a
            href="https://mybabb.com"
            className="mobileMenuWords "
          >
            MyBaBB.com
          </a>
          <hr
            className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent
                             border-r-transparent bg-yellow-950 "
          />
          <a
            href="https://mybabb.github.io/My_Introduction/"
            className="w-full py-6 text-center"
          >
            <span className="mobileMenuWords">Resume&apos;</span>
          </a>
          <hr
            className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent
                             border-r-transparent bg-yellow-950 "
          />
          <a href="https://mybabb.github.io/About_MyBaBB/" className="mobileMenuWords">
            <span className="mobileMenuWords">About</span>
          </a>
          <hr
            className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent 
                             border-r-transparent bg-yellow-950 "
          />
          <a
            href="https://mybabb.github.io/BetterMcTransport/"
            className="w-full py-6 text-center"
          >
            <span className="mobileMenuWords">Basic Demo</span>
          </a>

          <hr
            className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent
                             border-r-transparent bg-yellow-950 "
          />
          <a
            href="https://mybabb.github.io/SEO-BEST_PRACTICES/"
            className="w-full py-6 text-center"
          >
            <span className="mobileMenuWords ">SEO Page</span>
          </a>
          <hr
            className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent 
                             border-r-transparent bg-yellow-950 "
          />
          <a
            href="https://mybabb.github.io/Franken-Timer/"
            className="w-full py-6 text-center"
          >
            <span className="mobileMenuWords">
              <em>Special Event</em>
            </span>
          </a>
        </p>
        {/* xxxxxxxxxxxxxxxx⬆️  Buttons on Hidden Mobile Menu  xxxxxxxxxxx */}
        <div>
           
    </div>
      </nav>
      
    </div>
    
    </div>
  );
};

export default MobileMenu;
