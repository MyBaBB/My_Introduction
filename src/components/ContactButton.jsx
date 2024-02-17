// eslint-disable-next-line no-unused-vars
import React from "react";

const ContactButton = () => {
  return (
    <div>
      <a href="https://Mybabb.com">
        <div className="reContactButtonWrapper">
          <div
            className=" reContactButton mb-[1rem] mt-10 
         content-center
         whitespace-nowrap rounded-full 
         border 
         border-solid
         border-slate-900 
        bg-varMEDBLUEFEATHER p-1 p-3
         text-center
        
          
         text-[.75rem] hover:bg-gray-600
         sm:mb-[0rem]
         sm:text-3xl
         sm:text-[1rem]
         
         lg:text-[1.5rem] dark:border-none
         "
          >
            <span className="span1">📡</span>
            <a href="https://mybabb.com">
              <span className=" text-blue-400 hover:text-varLIGHTDUCKHEAD">
                Contact
              </span>
            </a>
            <span>📡</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactButton;
