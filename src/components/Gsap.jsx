// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
 
import { useGSAP } from "@gsap/react";
 


gsap.registerPlugin(useGSAP);

const Annie = () => {
   const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline()
 tl.from("#intro-slider",  { 
    xPercent: "0",
    duration: 1.4, 
    delay:.05, 
    })
    .from ([
      "#Goody1", "#Goody2", "#Goody3"],{

        opacity:0,
        y: "+=30",
        stagger:0.5,
          })
          
    .to ([
      "#Goody1", "#Goody2", "#Goody3"],{

        opacity:0,
        y: "-=30",
        delay:.03,
        stagger:0.5,
          })

          .from ("#Howdy",  {
           
        opacity:0,
        y: "+=30",
        stagger:0.5,
         }
         )
          .to ("#Howdy",  {
           
            opacity:0,
            y: "-=30",
            delay:.03,
            stagger:0.5,
         }
         )


          .to("#intro-slider",  { 
            xPercent: "-100",
            duration: 1.4, 
          })
  
   
     

    }, comp)

    return () => ctx.revert()
  }, []);


  return (
  <div>
<div id="introWrapper" className="absolute h-screen w-screen   " ref={comp}>
 

      <div id="intro-slider" className="h-screen w-screen p-10 bg-gray-400 absolute top-0 left-0 font-Aclonica-Regular z-20 
                        gap-10 tracking-tight                     ">
          <h1 id="Goody1" className="text-9xl  text-black">Goody Button 1</h1>
          <h1 id="Goody2" className="text-9xl  text-black">Goody Button 2</h1>
          <h1 id="Goody3" className="text-9xl  text-black">Goody Button 3</h1>
          <h1 id='Howdy' className="text-9xl font-bold text-gray-900 font-LibreBaskerville-Regular">
                Howdy
        </h1>
      </div>

 
        
   
    <div className="hiddenGoodyButton relative flex-col   h-screen w-screen items-center justify-center bg-transparent p-10">
    
   
       
    </div>
</div>
</div>

 
  );
};
export default Annie;