// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import phoneInHands from ".././img/phoneInHands.webp";
import Tours from "../img/./Tours400x300.webp";
import Beach from "../img/./BeachRentals.png";
import Groomer1 from ".././img/Groomer1.png";
import Chili from ".././img/chili.png";

const TopRightImage = () => {
  

 

  return (
    <div>
      <div className="sideNavImg relative mt-2  flex  ">
        
       
           
     
       
        <div className="relative flex  rounded-t-2xl     ">
         <div className="fixed top-[8rem] right-0 left-0 bottom-0  ">
          <img
            src={Groomer1}
            alt="Cindy"
            
            style={{  opacity: 0.04 }}
          />
              {/* cidy's hard throb */}
          {/* <div
            className="absolute
                  right-[.625rem] top-[0.2rem] rotate-2
                   animate-spin rounded-2xl border-2 border-pink-400

                 bg-pink-950 p-1 text-[7px] font-bold

                 text-pink-400 sm:right-[.15rem] sm:text-[7px]   
                 md:right-[.3rem]  md:top-[.2rem] md:text-[11.5px] lg:top-[.4rem]"
          >
            <span className="cindy ">Cindy&apos;s</span>
          </div>

          <div
            className="absolute right-[.625rem] top-[1.59rem] 
                   hidden rounded-2xl border-2
                   border-pink-400 bg-pink-950 p-1 text-[7px]
                   font-bold text-pink-400 
                   md:right-[.3rem] md:top-[3rem] 
                   md:block md:text-[11.5px]  lg:top-[3rem] "
          >
            <span> Mobile</span>
          </div>   */}
        </div>
</div>
        {/* <img
          src={Beach}
          alt="Beach"
           
           
       
        />
        <img
          src={Tours}
          alt="Tours"
         
           
     
        />
        <img
          src={Chili}
          alt="Chile"
            */}
          
          
         
      </div>
    </div>
  );
};

export default TopRightImage;
