// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoBookSharp } from "react-icons/io5";
const ThirdSection = () => {
  return (
    <div>
      <section className="pl-8">
        <h2 className="reSkills">My Repertoire</h2>
        <ul
          className="reUnOrderedList2
            text-[12px] xxs:text-[19px] xs:text-[23px] sm:text-[20px] md:text-[23px] "
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
            &nbsp;&nbsp;&nbsp;Tailwind CSS
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;JavaScript
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;Create Custom Websites
          </li>

         
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;Assist with Generic Websites
          </li>
          <li>
            <IoBookSharp className="inline-block text-blue-400" />
            &nbsp;&nbsp;&nbsp;Streamline Existing Websites{" "}
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
        </ul>
      </section>
    </div>
  );
};

export default ThirdSection;
