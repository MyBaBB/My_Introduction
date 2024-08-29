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
                 text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]  "
            >
              <u>
                <span className="Pointer">Owner of MyBaBB</span>{" "}
              </u>
            </p>
          </a>
          <p
            className="reUnOrderedList
                 text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]  "
          >
            <a href="https://Mybabb.com">
              <span className="hidden md:block">
                <RiLinksFill className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;My Landing Page
              </span>
            </a>
          </p>

          <a href="https://github.com/MyBaBB">
            <p
              className="reUnOrderedList
                 text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]  "
            >
              <span className="Pointer">
                <u>GitHub-Profile</u>
              </span>
            </p>
          </a>
          <p
            className="reUnOrderedList
                 text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]  "
          >
            <a href="https://github.com/MyBaBB">
              <span className="hidden md:block">
                <RiLinksFill className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp; My-GitHub
              </span>
            </a>
          </p>

          <a href="https://linkedin.com/in/brett-baker-4703a5110/">
            <p
              className="reUnOrderedList
                 text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]  "
            >
              <span className="Pointer">
                <u>Linked-In</u>
              </span>
            </p>
          </a>
          <p
            className="reUnOrderedList
                 text-[12px] sm:text-[20px] md:text-[20px] xxs:text-[19px] xs:text-[23px]  "
          >
            <a href="https://linkedin.com/in/brett-baker-4703a5110/">
              <span className="hidden md:block">
                <RiLinksFill className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp; My-linkedin.com
              </span>
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
