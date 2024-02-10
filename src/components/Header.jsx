// eslint-disable-next-line no-unused-vars
import React from 'react';
import CssLogo from '../img/cssLogoHeight80px.png';
import MeImg from './MeImg';

const header = () => {
  return (
    <div>
 
      <header className="reheader
        text-[2rem] sm:text-[2.5rem] lg:text-[3rem] ">
        <h1 className="reheaderh1 ">Brett Baker</h1>
        <img src={CssLogo} alt="CssLogo" className='reheaderimg' /> 
        <MeImg />
      </header>














      
    </div>
  )
}

export default header
