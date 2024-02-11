
        // eslint-disable-next-line no-unused-vars
        import React, { useState } from 'react';
        import phoneInHands from '../img/phoneInHands.webp';
        import Tours from '../img/Tours400x300.webp';
        import Beach from '../img/BeachRentals.png';
        import Groomer from '../img/Groomer.png';
        import Chili from '../img/Chili.png';
        const TopRightImage = () => {
          const [isZoomed, setIsZoomed] = useState(false);

          const handleImageClick = () => {
            setIsZoomed(!isZoomed);
          };

          return (
            <div>
              <div>
                
                <img
                  src={phoneInHands}
                  alt="phoneInHands"
                  width={isZoomed ? 800 : 400}
                  className={`m-1 my-2 z-2 rounded-xl shadow-xl ${isZoomed ? 'zoomed' : ''}`}
                  onClick={handleImageClick}
                />
                  <img
                  src={Groomer}
                  alt="Tours"
                  width={isZoomed ? 800 : 400}
                  className={`m-1 mt-2 z-2 rounded-xl shadow-xl ${isZoomed ? 'zoomed' : ''}`}
                  onClick={handleImageClick}
                />
                
                
                <img
                  src={Beach}
                  alt="Beach"
                  width={isZoomed ? 800 : 400}
                  className={`m-1 mt-2 z-2 rounded-xl shadow-xl ${isZoomed ? 'zoomed' : ''}`}
                  onClick={handleImageClick}
                />
                <img
                  src={Tours}
                  alt="Tours"
                  width={isZoomed ? 800 : 400}
                  className={`m-1 mt-2 z-2 rounded-xl shadow-xl ${isZoomed ? 'zoomed' : ''}`}
                  onClick={handleImageClick}
                />
                <img
                  src={Chili}
                  alt="Tours"
                  width={isZoomed ? 800 : 400}
                  className={`m-1 mt-2 z-2 rounded-xl shadow-xl ${isZoomed ? 'zoomed' : ''}`}
                  onClick={handleImageClick}
                />
               
              </div>
            </div>
          );
        };

     
export default TopRightImage

