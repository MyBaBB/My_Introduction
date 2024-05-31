// eslint-disable-next-line no-unused-vars
import React from "react";
import ScubaSpear1 from "./ScubaSpear1.svg";
import "./ScubaSpear.css";
const ScubaSpearComponent = () => {
  return (
    <div id="scubaSpear" className="dataToolTip13 scubaSpearWrapper text-2xl font-Itim" data-tool-tip="Surface">
      <img
        src={ScubaSpear1}
        alt="scuba Spear"
        width={75}
        height={75}
        className="scubaSpear  "
      />
    </div>
  );
};

export default ScubaSpearComponent;
