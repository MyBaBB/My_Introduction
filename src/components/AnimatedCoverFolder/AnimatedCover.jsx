// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLayoutEffect, useRef } from "react";
import MyImage from "../../img/NewMe.jpg";
import { gsap } from "gsap";
 import { useGSAP } from "@gsap/react";
 import "./AnimatedCover.css";


gsap.registerPlugin(useGSAP);

const Annie = () => {
   const comp = useRef(null);

   useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#intro-slider", {
        xPercent: "0",
        duration: 1.4,
        delay: 0.05,
      })
        .from(["#Goody1", "#Goody2", "#Goody3"], {
          opacity: 0,
          y: "+=300",
          stagger: 1,
          ease: "bounce.out",
        })

        .from("#Howdy", {
          opacity: 0,
          y: "+=300",
          stagger: 0.5,
        })
        .from("#MyImage", {
          opacity: 0,
          transformOrigin: "left bottom",
          delay: 0.2,
          stagger: 0.5,
          duration: 2,
          scale: 0,
        })
        .to("#MyImage", {
          opacity: 1,
          delay: 0.2,
          stagger: 0.5,
          duration:.2,
          scale: 1,
        })
        .to("#MyImage", {
          opacity: 1,
          duration:1.2,
          rotationY: 360,
        })
         
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.4,
        });
    }, comp);

    return () => ctx.revert()
  }, []);


  return (
  <div>
 <div id="introWrapper" className="absolute h-screen w-screen" ref={comp}>
         <div
           id="intro-slider"
             className="introSlider h-screen w-screen p-10  border-r-2 border-double border-blue-400  absolute top-0 left-0 font-Aclonica-Regular z-20 
           gap-10 tracking-tight                     ">
           <div className="h1Wrapper absolute   left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-fit w-fit flex-col items-center justify-center gap-2">
             <h1
               id="Goody1"
               className="goody1 text-center text-5xl font-LibreBaskerville font-bold text-white lg:text-8xl"
             >
               Brett&apos;s
             </h1>
             <h1
               id="Goody2"
               className="goody2 text-center text-5xl text-white font-LibreBaskerville font-bold lg:text-8xl"
             >
            Professional{" "}
             </h1>
             <h1
               id="Goody3"
               className="goody3 text-center text-5xl text-white font-LibreBaskerville font-bold lg:text-8xl"
             >
              Profile
             </h1>
 
             <img
               id="MyImage"
               src={MyImage}
               alt="Brett Image"
               width={150}
               height={150}
               className="bone m-auto mt-2 border-2 border-transparent  rounded-full "
             />
           </div>
         </div>
 
        
   
    <div className="hiddenGoodyButton relative flex-col   h-screen w-screen items-center justify-center bg-transparent p-10">
    
   
       
    </div>
</div>
</div>

 
  );
};
export default Annie;