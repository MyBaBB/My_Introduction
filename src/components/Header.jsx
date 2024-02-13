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
        <button className=" block sm:hidden border=2 border-solid border-black bg-gray-400 hover:bg-gray-600 text-black hover:text-white p-2 rounded-md
        textMe text-xs absolute left-[10px] top-[101px]">
					<a href="sms:+14696673305?body=I'm%20interested%20in%20your%20product.%20Please%20contact%20me.">Send Text</a>
				</button>
        <button className=" block sm:hidden border=2 border-solid border-black bg-gray-400 hover:bg-gray-600 text-black hover:text-white p-2 rounded-md
        textMe text-xs absolute right-[10px] top-[101px]">
					<a href="mailto:contact@mybabb.com">Email Me</a>
				</button>
      </header>














      
    </div>
  )
}

export default header
