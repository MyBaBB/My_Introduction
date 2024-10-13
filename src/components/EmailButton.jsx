// eslint-disable-next-line no-unused-vars
import React from "react";
import { BiMailSend } from "react-icons/bi";

const goBack = () => {
  window.history.back();
};

const EmailButton = () => {
  return (
    <div>
       <a href="https://contact.mybabb.com" >
      <div className="relative flex justify-center items-center z-[19]" >
        <button onClick={goBack}
          className=" emailMe mr-12 rounded-lg     
         border-2 border-solid border-black bg-black/50 p-2 text-lg text-blue-400
         hover:bg-black hover:shadow-lg hover:text-white "
        >
       <span className="emailMeIcon   flex items-center justify-center"><BiMailSend size={30} /></span><span className="emailMeText text-2xl" >Contact</span>
        </button>
        
      </div>
      </a>
    </div>
  );
};

export default EmailButton;
