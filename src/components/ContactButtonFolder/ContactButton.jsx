// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ContactButton.css";

import { GiClassicalKnowledge } from "react-icons/gi";
const ContactButton = () => {
  return (
    <div>
      <a href="https://resume-hub.mybabb.com/"> 
       
        <div
          className="w-fit mt-4 flex reContactButton relative justify-center whitespace-nowrap
                       rounded-full p-4 text-blue-200 hover:text-opacity-50
                       bg-gradient-to-b from-gray-700 to-gray-700
                       ">
          <div className="w-fit p-1  "><GiClassicalKnowledge size={20}/></div>
          
            <div className="w-fit mx-0 text-xl xs:text-4xl ">
            &nbsp;Resume&apos;&nbsp;Hub&nbsp;
            </div>
         
          <div className="w-fit p-1"><GiClassicalKnowledge size={20}/></div>


        
      </div>
      </a>
    </div>
  );
};

export default ContactButton;
