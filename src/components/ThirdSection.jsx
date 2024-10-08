// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoBookSharp } from "react-icons/io5";
const ThirdSection = () => {
  return (
    <div  className="relative -mt-4 
    ">
      <p className="text-center">
        <h2 className="reSkills">My Repertoire</h2>
      </p>
      <section className="relative    m-auto w-fit flex-col  justify-center    pl-8  ">
        <div className="relative  md:flex   ">
          <div className="mx-4">
            <ul
              className="reUnOrderedList2
            text-[12px] sm:text-[20px] md:text-[23px] xxs:text-[19px] xs:text-[23px] "
            >
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;React Js.
              </li>
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;HTML5
              </li>
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;CSS3
              </li>
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;Tailwind
                <span className="hidden lg:inline-block"> CSS</span>
              </li>
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;JavaScript
              </li>
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;GSAP{" "}
                <span className="hidden lg:inline-block">Animation</span>
              </li>
            </ul>
          </div>
          <div className="mx-4 ">
            <ul
              className="reUnOrderedList2
            text-[12px] sm:text-[20px] md:text-[23px] xxs:text-[19px] xs:text-[23px] "
            >
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;Website Assistance
              </li>
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;Three Js.
                <span className="hidden sm:inline-block">&nbsp;3d</span>{" "}
                Animations
              </li>
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;Adobe Photo-Shop
              </li>
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;Adobe Illustrator
              </li>
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;Stable Diffusion
              </li>
              <li>
                <IoBookSharp className="inline-block text-blue-400" />
                &nbsp;&nbsp;&nbsp;Open Source
                <span className="hidden lg:inline-block">&nbsp;Contributions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThirdSection;
