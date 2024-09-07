// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Beach from ".././img/BeachRentals.png";
import Tours from ".././img/Tours400x300.webp";
import Chili from ".././img/chili.png";

import Groomer1 from ".././img/Groomer1.png";

const TopImage = () => {
  return (
    <div>
      <div className="sideNavImg relative flex  justify-center   ">
        <div className="relative flex-row   ">
          <img src={Groomer1} alt="Cindy" width="200" height="200" />
        </div>
        <div className="relative flex-row   ">
          <img src={Beach} alt="Beach" width="200" height="200" />
        </div>
        <div className="relative flex-row   ">
          <img src={Tours} alt="Tours" width="200" height="200" />
        </div>
        <div className="relative flex-row   ">
          <img src={Chili} alt="Chile" width="200" height="200" />
        </div>
      </div>
    </div>
  );
};

export default TopImage;
{
  /* cindy's hard throb */
}
{
  /* <div
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
          </div>   */
}
