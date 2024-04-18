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
      
      <header className="header relative flex items-center h-[100px] z-50 w-screen bg-[#24558d]
        text-[2rem] sm:text-[2.5rem] lg:text-[3rem]  "
      > 
         
      <img src={NewMe} alt="New Me" width={80} height={80} className="absolute top-2 left-2"  />
   
    
       
        <div className="m-auto w-fit md:-translate-x-4 scale-[50%] xxs:scale-[60%] xs:scale-[80%] sm:scale-[100%]  ">
        <h1 className=" font-Caprasimo text-center mt-[-.2rem] mb-[.5rem]  text-amber-300 ">Brett Baker</h1>
        <div className='LogoItems relative flex justify-center mt-[-1rem] space-x-2 '>
          <span className='inline-block'>< GrReactjs size={35}
           className='reactSpin text-[#01b9f1] bg-transparent'/></span>
                <span className='inline-block'>< TbBrandHtml5 size={35} 
           className='text-[rgb(226,60,35)] bg-transparent' /></span>
                <span className='inline-block'>< TbBrandJavascript size={35}
           className='text-[#e6bb2e] bg-transparent'/></span>
                <span className='inline-block'>< TbBrandCss3 size={35}
           className='text-[#93c7ed] bg-transparent'/></span>
                <span className='inline-block'>< SiTailwindcss size={35}
           className='text-[#00ffff] bg-transparent'/></span>
           </div>


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
