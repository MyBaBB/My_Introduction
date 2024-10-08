// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FreeKindleBook.css";

const FreeKindleBook = () => {
  return (
    <div>
      {/* <a
        href="https://amzn.to/47cywyv"
        target="_blank"
        rel="noopener noreferrer"
      > */}
        <div className="font-DMSerifDisplay-Italic relative m-auto flex w-fit  ">
          <div
            className="dataToolTip33 "
            data-tool-tip='" Look at a few Cool Examples  "'
          >
            <p
              className="LandingPageBookButton m-auto  mt-4 -mb-4 w-fit rounded-3xl bg-gradient-to-b from-slate-400
                                to-slate-600 px-3 py-1 hover:from-slate-600 hover:to-slate-400   "
            >
              <button className="LandingPageBookWords  relative flex text-2xl  p-2 ">
               Kindle Book
              </button>
            </p>
          </div>
        </div>
      {/* </a> */}
    </div>
  );
};

export default FreeKindleBook;
