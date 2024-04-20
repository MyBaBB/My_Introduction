// eslint-disable-next-line no-unused-vars
import React from "react";
import { TbScubaMask } from "react-icons/tb";
import "./ScubaNav.css";
const ScubaMask = () => {
  return (
    <div className="w-fit ml-4  ">
      <a
        href="#toScubaMask"
        className=" 
                "
      >
        <div
          className="dataToolTip23  font-Itim text-[1rem]"
          data-tool-tip="To The Bottom"> <div/>
        
          <div
            className=" rounded-xl  
                             border-[1px]  border-varLIGHTBLUEFEATHER"
          >
            <div className="rounded-xl   border-[2px]  border-black">
              <div
                className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                 p-2 hover:bg-black xxs:bg-gray-700"
              >
                <span className="NavbarTitle4">
                  <div className="   ">
                    <TbScubaMask size={20} className="z-5 text-blue-200  " />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ScubaMask;
