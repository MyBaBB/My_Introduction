// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ContactButton.css";
import { TbGhost2 } from "react-icons/tb";
import { SlDiamond } from "react-icons/sl";
const ContactButton = () => {
  return (
    <div>
      <a href="https://resume-hub.mybabb.com/">
        <div
          className="reContactButton z-[19] relative m-auto mt-4 flex w-fit justify-center whitespace-nowrap
                       rounded-full bg-gradient-to-b from-gray-700 to-gray-700
                       p-4 text-blue-100 hover:scale-90 
                       "
        >
          <div className="w-fit p-1  ">
            {/* <GiClassicalKnowledge size={20} /> */}
            <SlDiamond   size={20}className="text-[#d0c8a9] " />
          </div>

          <div className="mx-0 w-fit text-3xl font-Kingthings_Petrock tracking-widest xs:text-4xl  hover:text-[#f7f0d7] ">
            &nbsp;Resume Hub&nbsp;
          </div>

          <div className="w-fit p-1">
            {/* <GiClassicalKnowledge size={20} /> */}
            <SlDiamond  size={20} className="text-[#d0c8a9]  " />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactButton;
