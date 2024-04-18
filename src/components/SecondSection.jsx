// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiLinksFill } from "react-icons/ri";
 
const SecondSection = () => {
  return (
    <div>
      
      <section className="pl-8">
        <h2 className="reExperience">Experience</h2>
        <div id="experience" className="reExperienceHover scroll-mt-10">
          <a href="https://Mybabb.com">
            <p
              className="reUnOrderedList
                 text-[12px] xxs:text-[19px] xs:text-[23px] sm:text-[20px] md:text-[20px]  "
            >
              <u>
                <span className="Pointer">Owner of MyBaBB</span>{" "}
              </u>
            </p>
            <p
              className="reUnOrderedList
                 text-[12px] xxs:text-[19px] xs:text-[23px] sm:text-[20px] md:text-[20px]  "
            >
              <span className="hidden md:block">
                <RiLinksFill className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;https://Mybabb.com
              </span>
            </p>
          </a>
          <a href="https://github.com/MyBaBB">
            <p
              className="reUnOrderedList
                 text-[12px] xxs:text-[19px] xs:text-[23px] sm:text-[20px] md:text-[20px]  "
            >
              <span className="Pointer">
                <u>GitHub-Profile</u>
              </span>
            </p>
            <p
              className="reUnOrderedList
                 text-[12px] xxs:text-[19px] xs:text-[23px] sm:text-[20px] md:text-[20px]  "
            >
              <span className="hidden md:block">
                <RiLinksFill className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp; https://github.com/MyBaBB
              </span>
            </p>
          </a>
          <a href="https://www.linkedin.com/in/mybabb-customweb/">
            <p
              className="reUnOrderedList
                 text-[12px] xxs:text-[19px] xs:text-[23px] sm:text-[20px] md:text-[20px]  "
            >
              <span className="Pointer">
                <u>Linked-In</u>
              </span>
            </p>
            <p
              className="reUnOrderedList
                 text-[12px] xxs:text-[19px] xs:text-[23px] sm:text-[20px] md:text-[20px]  "
            >
              <span className="hidden md:block">
                <RiLinksFill className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp; https://www.linkedin.com/in/mybabb-customweb/
              </span>
            </p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
