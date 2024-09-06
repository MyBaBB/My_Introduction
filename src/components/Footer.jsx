// eslint-disable-next-line no-unused-vars
import React from "react";

import AquariumStandDataTip from "./AquariumFolder/AquariumDataTip.jsx";
import ScubaSpear from "../components/ScubaManFolder/ScubaSpear.jsx";

const Footer = () => {
  return (
    <div className="relative flex-col justify-center bg-blue-950 ">
      <div className="pt-20 font-Itim">
        <AquariumStandDataTip />
      </div>
      <a href="#diverDown">
        <div
          id="scubaSpear"
          className="ScubaSpearWrapper absolute  bottom-0 ml-8  hidden w-fit xxs:inline-block "
        >
          <ScubaSpear />
        </div>
      </a>
    </div>
  );
};

export default Footer;
