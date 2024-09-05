// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoBookSharp } from "react-icons/io5";
const ThirdSection = () => {
  return (
    <div>
       <p className="text-center"><h2 className="reSkills">My Repertoire</h2></p>
      <section className="pl-8 relative flex justify-evenly">
       
<div>
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
            &nbsp;&nbsp;&nbsp;Tailwind<span className="hidden lg:inline-block"> CSS</span>
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;JavaScript
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;Custom <span className="hidden lg:inline-block">Websites</span>
          </li>
       </ul>
       </div>
       <div>
       <ul className="reUnOrderedList2
            text-[12px] sm:text-[20px] md:text-[23px] xxs:text-[19px] xs:text-[23px] ">
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;Website Assistance
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;Streamline <span className="hidden sm:inline-block">Existing</span> Websites 
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
            &nbsp;&nbsp;&nbsp;Open Source Contributor
          </li>
        </ul>
      </div>
      </section>
    </div>
  );
};

export default ThirdSection;
