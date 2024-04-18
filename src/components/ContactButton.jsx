// eslint-disable-next-line no-unused-vars
import React from "react";
 
const ContactButton = () => {
  return (
    <div>
        
        <div className="reContactButtonWrapper ">
          <div
            className=" reContactButton    
         content-center   translate-x-4 md:-translate-x-0
         whitespace-nowrap rounded-full 
         border-solid
         border-slate-900 
        bg-varMEDBLUEFEATHER p-2 
         text-center
         text-[.75rem] hover:bg-gray-600
        
         sm:text-xl
        
         
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
     
    </div>
  );
};

export default ContactButton;
