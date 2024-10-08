// eslint-disable-next-line no-unused-vars
import React from "react";

const EmailButton = () => {
  return (
    <div>
       <a href="mailto:contact@mybabb.com">
      <div className="relative flex z-50" >
        <button
          className=" emailMe mr-12 rounded-lg     
         border-2 border-solid border-black bg-gray-400 p-2 text-lg text-black
         hover:bg-gray-600 hover:text-varLIGHTDUCKHEAD  "
        >
         Email Me
        </button>
        
      </div>
      </a>
    </div>
  );
};

export default EmailButton;
