// eslint-disable-next-line no-unused-vars
import React from "react";
import DiverDown from "./DiverDown.svg";
import "./DiverDown.css";
const ScubaSpearComponent = () => {
  return (
    <div
      className="dataToolTip23 z-[19] diverDownWrapper font-Itim mt-8"
      data-tool-tip="Go Down "
    >
      <img
        src={DiverDown}
        alt="Diver Down"
        width={65}
        height={65}
        className="diverDown"
      />
    </div>
  );
};

export default ScubaSpearComponent;
