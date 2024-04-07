// eslint-disable-next-line no-unused-vars
import React from "react";
import "./AquariumStand.css";
const AquariumStand = () => {
  return (
    <div className="  mb-[.3rem] mt-4 flex justify-center">
      <a href="https://Resume-Hub.mybabb.com">
      <div
        className="aquariumStandWrapper rounded-xl border-[1px] border-varMEDBLUEFEATHER
       border-l-transparent border-r-transparent "
      >
        <div
          className="border-[12px] border-black border-b-gray-800 
        border-l-transparent border-r-transparent border-t-gray-800"
        >
          <div
            className="customInset  border-[1px] border-black border-l-transparent border-r-transparent bg-yellow-950"
            style={{
              boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 1)",
            }}
          >
            <h3
              className="h2 relative whitespace-nowrap  text-center text-blue-200 "
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
              }}
            >
              <span className="Kingthings m-4 whitespace-nowrap p-4 text-[2.2rem] ">
              Resume&apos; Hub
              </span>
            </h3>
          </div>
          
        </div>
      </div>
      </a>
    </div>
  );
};

export default AquariumStand;
