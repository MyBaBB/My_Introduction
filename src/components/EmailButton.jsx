// eslint-disable-next-line no-unused-vars
import React from "react";

const EmailButton = () => {
  return (
    <div>
      <div>
        <button
          className=" emailMe mr-12 rounded-lg     
         border-2 border-solid border-black bg-gray-400 p-2 text-lg text-black
         hover:bg-gray-600 hover:text-varLIGHTDUCKHEAD  "
        >
          <a href="mailto:contact@mybabb.com">Email Me</a>
        </button>
      </div>
    </div>
  );
};

export default EmailButton;
