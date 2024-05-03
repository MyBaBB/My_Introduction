// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ContactButton.css";
const ContactButton = () => {
  return (
    <div>
      <div className="reContactButtonWrapper  m-auto w-fit ">
        <div
          className=" reContactButton    
           content-center whitespace-nowrap
         rounded-full border-solid 
         border-slate-900
         bg-varMEDBLUEFEATHER 
        p-4 text-center 
         text-[1.153rem]
         hover:bg-gray-600 sm:text-[1.91rem]
         lg:text-[2.3rem] dark:border-none
         "
        >
          <span className="span1 text-4xl">📡</span>
          <a href="https://resume-hub.mybabb.com/">
            <span className=" text-blue-400 hover:text-varLIGHTDUCKHEAD">
              Resume&apos; Hub
            </span>
          </a>
          <span className="text-4xl">📡</span>
        </div>
      </div>
    </div>
  );
};

export default ContactButton;
