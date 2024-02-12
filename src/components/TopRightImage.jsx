
        // eslint-disable-next-line no-unused-vars
        import React, { useState } from 'react';
        import phoneInHands from '../img/phoneInHands.webp';
        import Tours from '../img/Tours400x300.webp';
        import Beach from '../img/BeachRentals.png';
        import Groomer1 from '../img/Groomer1.png';
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
                <div className='relative'>
                  <img
                  src={Groomer1}
                  alt="Cindy"
                  width={isZoomed ? 800 : 400}
                  className={`m-1 mt-2 z-2 rounded-xl shadow-xl ${isZoomed ? 'zoomed' : ''}`}
                  onClick={handleImageClick}
                   />

                 <div className='absolute
                  text-[7px] sm:text-[7px] md:text-[11.5px]
                   p-1 border-2 border-pink-400 rounded-2xl

                 top-[0.2rem] md:top-[.2rem] md:top-[.2rem] lg:top-[.4rem]

                 right-[.625rem] sm:right-[.5rem] md:right-[.6rem]   
                 font-bold text-pink-400  bg-pink-950 animate-spin rotate-2'>
                  <span className='cindy '>Cindy&apos;s</span></div>
                 <div className='absolute 
                 text-[7px] sm:text-[7px] md:text-[11.5px]
                  p-1 border-2 border-pink-400 rounded-2xl

                  top-[1.59rem] sm:top-[1.6rem] md:top-[2.1rem] lg:top-[2.5rem]
                  right-[.625rem] sm:right-[.5rem] md:right-[.6rem] 
                   font-bold text-pink-400  bg-pink-950 '>Mobile</div>
                </div>
                
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
                  alt="Chile"
                  width={isZoomed ? 800 : 400}
                  className={`m-1 mt-2 z-2 rounded-xl shadow-xl ${isZoomed ? 'zoomed' : ''}`}
                  onClick={handleImageClick}
                />
                 
              </div>
            </div>
          );
        };

     
export default TopRightImage

