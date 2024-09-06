// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiLinksFill } from "react-icons/ri";
import ThirdSection from "./ThirdSection";
 
const SecondSection = () => {
  return (
    <div className="-mt-4 relative  bg-gradient-to-b from-blue-500 to-blue-950
    ">
      <section>
        <ThirdSection />
      </section>

<br />
     
      <section className="z-50   relative flex justify-center lg:absolute top-[2rem] left-4">
        <div id="experience" className="reExperienceHover scroll-mt-10">
          <div>
            <a href="https://Mybabb.com">
              <p className="reUnOrderedList text-[12px] xxs:text-[19px] xs:text-[20px] sm:text-[20px] md:text-[20px]  ">
              
                <RiLinksFill className="inline-block text-blue-400" />
                  <span className="Pointer">
                    &nbsp;&nbsp;
                    <u>Owner of MyBaBB</u></span> 
              </p>
            </a> 
          </div>

          <div>
            <a href="https://github.com/MyBaBB">
              <p className="reUnOrderedList text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[20px]">
              <RiLinksFill className="inline-block text-blue-400" />
                <span className="Pointer">
                &nbsp;&nbsp;<u>GitHub-Profile</u>
                </span>
              </p>
            </a>
          </div>

          <div>
            <a href="https://linkedin.com/in/brett-baker-4703a5110/">
              <p className="reUnOrderedList text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[20px]">
                <span className="Pointer">
                <RiLinksFill className="inline-block text-blue-400" />
                &nbsp;&nbsp;<u>Linked-In</u>
                </span>
              </p>
            </a>          
          </div>
          <br />
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
