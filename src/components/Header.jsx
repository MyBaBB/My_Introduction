// eslint-disable-next-line no-unused-vars
import React from "react";
import CssLogo from "../img/cssLogoHeight80px.png";
import MeImg from "./MeImg";
import ScubaMask from "./ScubaNavFolder/ScubaMask";
import ContactButton from "./ContactButton";
import EmailButton from "./EmailButton";
const header = () => {
  return (
    <div>
      
      <header
        className="reheader 
        text-[2rem] sm:text-[2.5rem] lg:text-[3rem] "
      >
        
        <h1 className="reheaderh1 ">Brett Baker</h1>
        <img src={CssLogo} alt="CssLogo" className="reheaderimg" />
        <MeImg />
       

        
        
      </header>

    <div className="relative flex justify-between items-center p-4 ">
      <ScubaMask />
       <ContactButton />
      <EmailButton />
    </div>
    </div>
  );
};

export default header;
