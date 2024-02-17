// eslint-disable-next-line no-unused-vars
import React from "react";
import NewMe from "../img/NewMe.png";

const MeImg = () => {
  return (
    <div
      className=" absolute 
    left-1 top-4 w-[60px] xxs:left-2 xxs:top-3 xs:left-4  
    xs:top-3 sm:left-4 sm:top-1 sm:w-[90px] md:left-5 md:top-1
    lg:left-5 lg:top-1 lg:w-[105px]"
    >
      <img
        src={NewMe}
        alt="NewMe"
        className="NewMeJsx rounded-full border-2 border-[#565656]"
      />
    </div>
  );
};

export default MeImg;
