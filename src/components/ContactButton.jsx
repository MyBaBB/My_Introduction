// eslint-disable-next-line no-unused-vars
import React from 'react'

const ContactButton = () => {
  return (
<div>
 <a href="https://Mybabb.com">
   <div className="reContactButtonWrapper">
     <div className=" reContactButton content-center p-10 
         rounded-full
         border border-solid 
         border-slate-900 
         bg-varMEDBLUEFEATHER
         p-3 
        text-[1rem] sm:text-[1.5rem] lg:text-[2rem]
         
         text-black
         active:bg-varLIGHTBLUEFEATHER 
         dark:border-none sm:text-3xl
         text-center
         whitespace-nowrap
         mt-10
         -mb-5"
         > 
         
     <span className='span1'>
       📡
     </span>
         <span  className="z-50 text-varLIGHTBLUEFEATHER hover:text-[#FFDB58]">
            Contact 
         </span>
     <span>
       📡
     </span>

   </div>  

  </div>
</a>
</div>
  )
}

export default ContactButton
