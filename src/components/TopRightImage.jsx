// eslint-disable-next-line no-unused-vars
import React from 'react'
import phoneInHands from '../img/phoneInHands.webp'
import Tours from '../img/Tours400x300.webp'
const TopRightImage = () => {
  return (
    <div>
      <div > 
        
        <img src={phoneInHands} alt="phoneInHands" width={400}  className="m-1 my-2 z-2 rounded-xl shadow-xl " />
        <img src={Tours} alt="Tours" width={400}  className="m-1 mt-2 z-2 rounded-xl shadow-xl "/>
      </div>
    </div>
  )
}

export default TopRightImage

