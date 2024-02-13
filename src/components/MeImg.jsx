// eslint-disable-next-line no-unused-vars
import React from 'react'
import NewMe from '../img/NewMe.png'


const MeImg = () => {
  return (
    <div className=' absolute 
    top-4 xxs:top-3 xs:top-3 sm:top-1 md:top-1 lg:top-1  
    left-1 xxs:left-2 xs:left-4 sm:left-4 md:left-5 lg:left-5
    w-[60px] sm:w-[90px] lg:w-[105px]'>
      <img src={NewMe} alt="NewMe" className='NewMeJsx border-2 border-[#565656] rounded-full' />
    </div>
  )
}

export default MeImg