// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiLinksFill } from "react-icons/ri";
import ThirdSection from "./ThirdSection";
 
const SecondSection = () => {
  return (
    <div className="-mt-4 bg-gradient-to-b from-blue-500 to-blue950">
      <section>
        <ThirdSection />
      </section>
      <p className="text-center">
        <h2 className="reExperience">Experience</h2>
      </p>
      <section className="pl-8 relative flex justify-center">
        <div id="experience" className="reExperienceHover scroll-mt-10">
          <div>
            <a href="https://Mybabb.com">
              <p className="reUnOrderedList text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]">
                <u>
                  <span className="Pointer">Owner of MyBaBB</span>{" "}
                </u>
              </p>
            </a>

            <p className="reUnOrderedList text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]">
              <a href="https://Mybabb.com">
                <span className=" ">
                  <RiLinksFill className="inline-block text-blue-400" />
                  &nbsp;&nbsp;&nbsp;My Landing Page
                </span>
              </a>
            </p>
          </div>

          <div>
            <a href="https://github.com/MyBaBB">
              <p className="reUnOrderedList text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]">
                <span className="Pointer">
                  <u>GitHub-Profile</u>
                </span>
              </p>
            </a>
            <p className="reUnOrderedList text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]">
              <a href="https://github.com/MyBaBB">
                <span className=" ">
                  <RiLinksFill className=" inline-block text-blue-400" />
                  &nbsp;&nbsp;&nbsp; My-GitHub
                </span>
              </a>
            </p>
          </div>

          <div>
            
            <a href="https://linkedin.com/in/brett-baker-4703a5110/">
              <p className="reUnOrderedList text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]">
                <span className="Pointer">
                  <u>Linked-In</u>
                </span>
              </p>
            </a>
            <p className="reUnOrderedList text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]">
              <a href="https://linkedin.com/in/brett-baker-4703a5110/">
                <span className=" ">
                  <RiLinksFill className="inline-block text-blue-400" />
                  &nbsp;&nbsp;&nbsp; My-linkedin.com
                </span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
