// eslint-disable-next-line no-unused-vars
import React from "react";
// import CssLogo from "../img/cssLogoHeight80px.png";
import NewMe from "../img/NewMe.png";
import ScubaMask from "./ScubaNavFolder/ScubaMask";
import ContactButton from "./ContactButton";
import EmailButton from "./EmailButton";
const header = () => {
  return (
    <div>
      
      <header className="header relative flex items-center h-[100px] z-50 w-screen bg-[#24558d]
        text-[2rem] sm:text-[2.5rem] lg:text-[3rem]  "
      > 
         
      <img src={NewMe} alt="New Me" width={80} height={80} className="absolute top-2 left-2"  />
   
    
       
        <div className="m-auto w-fit  -translate-x-4 ">
        <h1 className=" font-Caprasimo text-center   text-amber-300 ">Brett Baker</h1>
        </div>
       
       
   
 
  
  
 

        
        
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
