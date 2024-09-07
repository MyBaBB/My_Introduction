// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FreeKindleBook.css";

const FreeKindleBook = () => {
  return (
    <div>
      <a
        href="https://amzn.to/47cywyv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="font-DMSerifDisplay-Italic relative m-auto flex w-fit  ">
          <div
            className="dataToolTip33 "
            data-tool-tip='" Book about Landing Page Design "'
          >
            <p
              className="LandingPageBookButton m-auto mt-2 w-fit rounded-3xl bg-gradient-to-b from-red-400
                                to-red-900 px-3 py-1 hover:from-red-900 hover:to-red-400   "
            >
              <button className="LandingPageBookWords  relative flex text-lg  ">
                Free Kindle Book
              </button>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FreeKindleBook;
