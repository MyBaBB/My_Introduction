// eslint-disable-next-line no-unused-vars
import React from "react";

import AquariumStandDataTip from "./AquariumFolder/AquariumDataTip.jsx";
import ScubaSpear from "../components/ScubaManFolder/ScubaSpear.jsx";

const Footer = () => {
  return (
    <div className="relative flex-col justify-center ">
      
      <div  className="font-Itim pt-20">
        <AquariumStandDataTip />
        
      </div>
      <a href="#diverDown">
      <div id="scubaSpear" className="absolute bottom-0  ml-8 ScubaSpearWrapper  w-fit hidden xxs:inline-block ">
      <ScubaSpear />
         </div>
      </a>
    </div>
  );
};

export default Footer;
