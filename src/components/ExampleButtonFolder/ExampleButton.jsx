// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ExampleButton.css";

const FreeKindleBook = () => {
  return (
    <div>
      <a
        href="https://mybabb.github.io/100_Bucks_Intro/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="font-DMSerifDisplay-Italic relative m-auto flex w-fit  ">
          <div
            className="dataToolTip33 "
            data-tool-tip='" Look at a few Cool Examples  "'
          >
            <p
              className="LandingPageBookButton m-auto  mt-4  w-fit rounded-3xl bg-gradient-to-b from-green-400
                                to-blue-600 px-3 py-1  hover:bg-slate-400  hover:text-gray-600  hover:shadow-lg "
            >
              <button className="LandingPageBookWords  relative flex text-4xl  p-2 ">
                Examples
              </button>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FreeKindleBook;
