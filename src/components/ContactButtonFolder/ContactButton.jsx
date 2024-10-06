// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ContactButton.css";
import { TbGhost2 } from "react-icons/tb";
// import { GiClassicalKnowledge } from "react-icons/gi";
const ContactButton = () => {
  return (
    <div>
      <a href="https://resume-hub.mybabb.com/">
        <div
          className="reContactButton relative m-auto mt-4 flex w-fit justify-center whitespace-nowrap
                       rounded-full bg-gradient-to-b from-gray-700 to-gray-700
                       p-4 text-blue-200 hover:scale-90 
                       "
        >
          <div className="w-fit p-1  ">
            {/* <GiClassicalKnowledge size={20} /> */}
            <TbGhost2 size={20} />
          </div>

          <div className="mx-0 w-fit text-xl font-Creepster tracking-widest xs:text-4xl text-orange-400 hover:opacity-90 ">
            &nbsp;Happy Halloween &nbsp;
          </div>

          <div className="w-fit p-1">
            {/* <GiClassicalKnowledge size={20} /> */}
            <TbGhost2 size={20} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactButton;
