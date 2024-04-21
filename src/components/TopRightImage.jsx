// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import phoneInHands from ".././img/phoneInHands.webp";
import Tours from "../img/./Tours400x300.webp";
import Beach from "../img/./BeachRentals.png";
import Groomer1 from ".././img/Groomer1.png";
import Chili from ".././img/chili.png";

const TopRightImage = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <div className="sideNavImg relative mt-2  flex-col   p-1">
        <img
          src={phoneInHands}
          alt="phoneInHands"
          width={isZoomed ? 800 : 400}
          className={`z-2 m-1 my-2 rounded-xl shadow-xl ${isZoomed ? "zoomed" : ""}`}
          onClick={handleImageClick}
        />
        <div className="relative">
          <img
            src={Groomer1}
            alt="Cindy"
            width={isZoomed ? 800 : 400}
            className={`z-2 m-1 mt-2 rounded-xl shadow-xl ${isZoomed ? "zoomed" : ""}`}
            onClick={handleImageClick}
          />

          <div
            className="absolute
                  right-[.625rem] top-[0.2rem] rotate-2
                   animate-spin rounded-2xl border-2 border-pink-400

                 bg-pink-950 p-1 text-[7px] font-bold

                 text-pink-400 sm:right-[.15rem] sm:text-[7px]   
                 md:right-[.3rem]  md:top-[.2rem] md:text-[11.5px] lg:top-[.4rem]"
          >
            <span className="cindy ">Cindy&apos;s</span>
          </div>
          <div
            className="absolute right-[.625rem] top-[1.59rem] 
                 hidden rounded-2xl border-2
                  border-pink-400 bg-pink-950 p-1 text-[7px]

                  font-bold text-pink-400 sm:right-[.5rem] sm:top-[1.6rem]
                  sm:text-[7px] md:right-[.3rem] md:top-[2.1rem] 
                   md:text-[11.5px] lg:top-[2.5rem]  lg:block "
          >
            Mobile
          </div>
        </div>

        <img
          src={Beach}
          alt="Beach"
          width={isZoomed ? 800 : 400}
          className={`z-2 m-1 mt-2 rounded-xl shadow-xl ${isZoomed ? "zoomed" : ""}`}
          onClick={handleImageClick}
        />
        <img
          src={Tours}
          alt="Tours"
          width={isZoomed ? 800 : 400}
          className={`z-2 m-1 mt-2 rounded-xl shadow-xl ${isZoomed ? "zoomed" : ""}`}
          onClick={handleImageClick}
        />
        <img
          src={Chili}
          alt="Chile"
          width={isZoomed ? 800 : 400}
          className={`z-2 m-1 mt-2 rounded-xl shadow-xl ${isZoomed ? "zoomed" : ""}`}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default TopRightImage;
