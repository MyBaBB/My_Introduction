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
        <button className=" block md:hidden border=2 border-solid border-black bg-gray-400
         hover:bg-gray-600 text-black hover:text-varLIGHTDUCKHEAD p-2 rounded-md
        textMe text-xs absolute left-[10px] top-[101px] sm:top-[123px]">
					<a href="sms:14696673305">Send Text</a>
				</button>
        <button className="emailMe block  border=2 border-solid border-black bg-gray-400
         hover:bg-gray-600 text-black hover:text-varLIGHTDUCKHEAD p-2 rounded-md
         text-xs absolute right-[10px] sm:right-[20px] md:right-[30px] lg:right-[50px] 
         top-[101px] xs:top-[101px] sm:top-[122px] md:top-[125px] lg:top-[135px]">
					<a href="mailto:contact@mybabb.com">Email Me</a>
				</button>
      </header>














      
    </div>
  )
}

export default header
