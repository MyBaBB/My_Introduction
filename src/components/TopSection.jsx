// eslint-disable-next-line no-unused-vars
import React from "react";
import TopImage from "./TopImage";
import { GiLightningTear } from "react-icons/gi";
import { RiLinksFill } from "react-icons/ri";
import { MdOutlineTimer } from "react-icons/md";
import { SlEyeglass } from "react-icons/sl";
import { SiGooglechrome } from "react-icons/si";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TfiHandPointRight } from "react-icons/tfi";
import { TbDiamond } from "react-icons/tb";
 

import { TfiEye } from "react-icons/tfi";

import NavbarLinks from "./NavbarFolder/NavbarLinks";
import FreeKindleBook from "./FreeKindlebook/FreeKindleBook";
const TopSection = () => {
  return (
    <div className="  ">
    
       <section>
        <div className="objectiveWrapper flex-col mt-[8rem] ">
          <NavbarLinks />
          <div className="relative flex-row w-screen  ">
                  <div className="">
                    <TopImage />
                  </div>
                </div>
            <p
            className="objectiveParagraph  flex  h-[100%] w-[100%]
         text-[12px] sm:text-[24px] md:text-[28px] xxs:text-[16px] xs:text-[20px] "
          >
            <div className="extraWrapper relative flex-row w-[100%]   ">
              <div className="topParagraphNew relative flex-row w-[85%] m-auto    ">
                
                
                    <h2 className="mb-8   text-center font-Kingthings_Petrock text-4xl md:text-8xl">
                      Brett&apos;s Custom Websites 
                    </h2>
                  </div>
                 <div className="  w-[85%] m-auto">
                  <p className="relative mb-[1.25rem]  mt-3 text-center text-[#ffdb58] ">
                     
                  <u className="decoration-blue-800 "> Front End Developer </u>
                     
                    </p>
                    <p className="text-center ">
                    <span className="customFont13  text-[#ffdb58]  ">
                    <span className="   text-xl sm:text-2xl md:text-3xl lg:text-4xl "
                      ><u className="decoration-blue-800 "> Customized for Performance </u> 
                      </span>
                    </span>
                    <br />
                  </p>
                  </div>
                  <hr className="hrStyles m-auto mt-8  rounded-full   p-[1.55px]" />
                  <h2
                    className="customFont13  colorChanger  mt-1 text-center 
                      text-green-300 sm:text-[29px] md:text-[24px]  lg:text-[32px]  xxs:text-[21px] xs:text-[26px] "
                  >
                    Attract more Humans
                  </h2>
                  <span
                    className="colorChanger m-auto mb-[-0rem] mt-[-.3rem] block text-center
                   text-green-300    "
                  >
                    with
                  </span>

                  <a href="https://mybabb.github.io/BetterMcTransport/ ">
                    &nbsp;
                    <h2 className=" mt-[-2.5rem] whitespace-nowrap  text-center text-4xl">
                      <TfiEye
                        className=" inline-block text-blue-300 "
                      />

                      <span
                        className="customHover colorChanger text-[16px]  
                                   sm:text-[29px]  md:text-[24px]  lg:text-[32px] 
                                  xxs:text-[21px]  xs:text-[26px]  "
                      >
                        &nbsp; Custom Landing Pages &nbsp;
                      </span>
                      <TfiEye className=" inline-block text-blue-300" />                  
                    </h2>

<br />
                         
                    <p
                      className="mt-[-1.8rem]
                     text-center text-[12px]  sm:mt-[-2.5rem]  sm:text-[18px]  md:text-[20px]  lg:text-[22px]
                      xxs:text-[16px] xs:mt-[-2.5rem] xs:text-[16px] "
                    ></p>
                    <p className=" text-center text-[12px]  text-base leading-[1.95rem] sm:text-[20px]  md:text-[24px]
                                    lg:text-[27px]  xxs:text-[16px]  xs:text-[16px] ">
                      <span className="whitespace-nowrap">
                        <span className="inline-block">
                          <RiDoubleQuotesL />
                        </span>
                        &nbsp;I specialize
                      </span>{" "}
                      in developing Custom Websites from scratch and providing
                      personal assistant services for your{" "}
                      <span className="whitespace-nowrap">
                        {" "}
                        &nbsp;project needs.
                        <span className="inline-block">
                          <RiDoubleQuotesR />
                        </span>
                      </span>{" "}
                    </p>              
                  </a>
               
                  < FreeKindleBook />
                                  <p
           className="objectiveParagraph w-[85%] m-auto text-[12px] sm:text-[24px] 
                     md:text-[28px] xxs:text-[16px] xs:text-[20px] "
        
          >
           
          </p>
        <div className="   w-[85%] m-auto mt-100">
          <div
            id="technologies"
            className="objectiveParagraph text-[12px] sm:text-[24px] md:text-[28px]
             xxs:text-[16px] xs:text-[20px] "
          >
            <hr className="hrStyles m-auto   my-8 rounded-full   p-[1.275px]" />
            
            <h5 className="customFont13 mb-8 text-center text-amber-200">
              &nbsp;&nbsp;I offer Web Development that is Proficient in the
              following technologies:
            </h5>
            <p>      
            <TfiHandPointRight className="-mt-1 inline-block text-blue-400" />
            &nbsp;&nbsp;
            <span className="customFont13 text-amber-200"
            >React:</span>&nbsp;I wield expertise in building dynamic and responsive
            user interfaces using React. 
            <br />
            <TfiHandPointRight className="-mt-1 inline-block text-blue-400" />
            &nbsp;&nbsp;<span className="customFont13 text-amber-200"
            >Tailwind CSS:</span>
            &nbsp;I leverage the power of Tailwind CSS to create efficient
            and consistent designs.
            <br />
         
            <TfiHandPointRight className="-mt-1 inline-block text-blue-400" />
            &nbsp;&nbsp;<span className="customFont13 text-amber-200"
            >JavaScript:</span>
            &nbsp;I use JavaScript, which enables both 
            <u className="decoration-blue-700"> Interactivity</u> and <u className="decoration-blue-700">Functionality.</u>
            </p>            
           
            <br />
            <div className="  w-full m-auto">
                   <hr className="hrStyles mt-5 -mb-8 m-auto  
                       rounded-full   p-[1.55px] "
                    />
                  
                  <div id="performance" className="objectiveParagraph  -mb-8  text-center  w-[85%]
                   m-auto text-[12px]    sm:text-[24px]  
                   md:text-[28px] xxs:text-[16px] xs:text-[20px] ">
                    
                    <br />
                    <p className="inline-block p-4 text-center">
                      &nbsp;&nbsp;
                      <span className=" ">

                        <span className="inline-block text-blue-400">
                          <RiDoubleQuotesL />
                        </span>
                        <span className="text-amber-200">
                        &nbsp;While I appreciate
                      </span>{" "}
                      </span>
                      <span className="text-amber-200">
                      conventional techniques,<br /> I also advocate for advanced
                      strategies to achieve&nbsp;
                      </span>
                      <span className="text-amber-200">
                      <span className="whitespace-nowrap">
                        outstanding results.&nbsp;
                       </span> 
                    
                        <span className="inline-block text-blue-400">
                          <RiDoubleQuotesR />
                        </span>
                      </span>
                    </p>
                  </div>
                 
                  <br />

                  <article className=" w-[100%] m-auto  text-[12px]
                                       sm:text-[24px] md:text-[28px] xxs:text-[16px] xs:text-[20px]">
                    <SiGooglechrome className="inline-block text-blue-400" />
                    &nbsp;<span className="googleG1 text-red-600">G</span>
                    <span className="googleO1 text-green-600">o</span>
                    <span className="googleO2 text-yellow-600">o</span>
                    <span className="googleG2 text-blue-600">g</span>
                    <span className="googleL text-orange-400">l</span>
                    <span className="googleE text-green-600">e</span>
                    &nbsp; Search Engine Optimization
                    <GiLightningTear className="inline-block text-blue-300" />
                    lightning fast for&nbsp;
                    <a href="https://mybabb.github.io/SEO-BEST_PRACTICES/">
                      <span className="customHoverSEO underline">(SEO)</span>
                    </a>
                    <br />
                    <SlEyeglass className="inline-block text-blue-400" /> It
                    looks great on all devices.(Mobile Responsive)
                    <br />
                    <MdOutlineTimer className="inline-block text-blue-400" />
                    &nbsp;Fast load times.
                    <br />
                    <RiLinksFill className="inline-block text-blue-400" />
                    &nbsp;Custom links that Directs the Flow for new customers.
                    <br />
                  </article>
                  </div>
 
                </div>

                <hr className="hrStyles m-auto  my-8  rounded-full  p-[1.275px]" />
      
      <div className=" mb-14">
        <p className="text text-center">
        <RiDoubleQuotesL className=" mb-14 inline-block text-blue-400" />
        <span className="customFont13 text-amber-200">
          Building High Performance Websites.
          <RiDoubleQuotesR className="mb-6 inline-block text-blue-400" />
        </span>
        </p>
        
        <TbDiamond className="inline-block text-blue-400 " />
        &nbsp;Adding Style shows more Class.
        <br />
        <TbDiamond className="inline-block text-blue-400 " />
        &nbsp;Add more Functions with a Custom Landing Page
        <br />
        <TbDiamond className="inline-block text-blue-400 " />
        &nbsp;I can also Add features to your existing Website.
        <br />
        <TbDiamond className="inline-block text-blue-400 " />
        &nbsp;I am looking for Quality Business owners to Grow and Expand
        with.
        <br />
        <TbDiamond className="inline-block text-blue-400 " />
        &nbsp;I can offer a Professional Website at a very reasonable
        price.
       
      </div>

                </div>
               
            </div>
            
          </p>

        </div>
        
      </section>
    </div>
  );
};

export default TopSection;
