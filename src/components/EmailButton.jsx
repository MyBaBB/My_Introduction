// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const EmailButton = () => {
  return (
    <div>
       <Link to="https://my-introduction.onrender.com/#scubaSpear">
      <div className="relative flex z-[19]" >
        <button
          className=" emailMe mr-12 rounded-lg     
         border-2 border-solid border-black bg-gray-400 p-2 text-lg text-black
         hover:bg-gray-600 hover:text-varLIGHTDUCKHEAD  "
        >
         Email Me
        </button>
        
      </div>
      </Link>
    </div>
  );
};

export default EmailButton;
