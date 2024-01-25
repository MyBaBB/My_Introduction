// eslint-disable-next-line no-unused-vars
import React from 'react'
import { GiLightningTear } from "react-icons/gi";
import { RiLinksFill } from "react-icons/ri";
import { MdOutlineTimer } from "react-icons/md";
import { SlEyeglass } from "react-icons/sl";
import { SiGooglechrome } from "react-icons/si";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TfiHandPointRight } from "react-icons/tfi";
import { TbDiamond } from "react-icons/tb";



const TopSection = () => {
  return (
    <div>
      
      <section>
         <h2 className='reObjective'>Hello :</h2>
    <div className="objectiveWrapper">
        <p className="objectiveParagraph 
        text-[12px] xxs:text-[16px] xs:text-[20px] sm:text-[24px] md:text-[28px]
        p-[12px] xxs:p-[22px] xs:p-[32px] sm:p-[42px] md:p-[52px] lg:p-[52px] ">
          <TfiHandPointRight className='inline-block text-blue-400 -mt-1' />&nbsp;I am Brett, a Web Developer with skills in React, HTML, CSS, Tailwind CSS and JavaScript.&nbsp;  I currently use Vite and Firebase with React js, and I style with Tailwind no matter how big or small the project.&nbsp; I see this combo being the best option for now and for future applications.&nbsp; Last year I completed my Studies in Basic Web Development and have gone on to more Advanced Stages of total Web Manipulation.
        <br/>
        <TfiHandPointRight className='inline-block text-blue-400 -mt-1' />&nbsp;
            I also have certifications in Professional Adobe Photo-Shop and Advanced Illustrator, which puts me in a position to pick up some side work as I continue to learn and grow with advanced techniques. 
          </p>
        <p className="objectiveParagraph mt-[-3rem]
        text-[12px] xxs:text-[16px] xs:text-[20px] sm:text-[24px] md:text-[28px]
        p-[12px] xxs:p-[22px] xs:p-[32px] sm:p-[42px] md:p-[52px] lg:p-[52px]" >
          
          <RiDoubleQuotesL className='inline-block text-blue-400 mb-6' />
          I Have more skills than a Generic Website builder.
            <RiDoubleQuotesR className='inline-block text-blue-400 mb-6' /> 
            <br/>
            <TbDiamond className='inline-block text-blue-400 ' /> I am looking for Quality Business owners to Grow and Expand with.
            <br/>
            <TbDiamond className='inline-block text-blue-400 ' /> I can offer a Professional Website at a very reasonable price at this time.  
            <br/>
            <TbDiamond className='inline-block text-blue-400 ' /> Let&apos;s Get Started now.
            <br/>
             
            <TbDiamond className='inline-block text-blue-400 ' /> I am very dedicated in Both My work and my studies.
        </p>

        <p className="objectiveParagraph mt-[-3rem]
        text-[12px] xxs:text-[16px] xs:text-[20px] sm:text-[24px] md:text-[28px]
        p-[12px] xxs:p-[22px] xs:p-[32px] sm:p-[42px] md:p-[52px] lg:p-[52px]">  
        <RiDoubleQuotesL className='inline-block text-blue-400 mb-6' />
        My landing page is Great for a small business or a personal page.
        <RiDoubleQuotesR className='inline-block text-blue-400 mb-6' />  
            <br/>
        <SiGooglechrome className='inline-block text-blue-400' />&nbsp;<span className='googleG1 text-red-600'>G</span>
        <span className='googleO1 text-green-600'>o</span>
        <span className='googleO2 text-yellow-600'>o</span>
        <span className='googleG2 text-blue-600'>g</span>
       <span className='googleL text-orange-400'>l</span>
        <span className='googleE text-green-600'>e</span>
        &nbsp;
        
         Search Engine Optimization<GiLightningTear className='inline-block text-blue-300' />
           lightning fast for&nbsp;
          <span className='underline'>(SEO)</span>
            <br/>         
            <SlEyeglass className='inline-block text-blue-400' /> I can make it look great on all devices.(Mobile Responsive)
            <br/>       
            <MdOutlineTimer className='inline-block text-blue-400' />&nbsp;I can spend the time it takes to make it perfect for you.
            <br/>
            <RiLinksFill className='inline-block text-blue-400' />&nbsp;I can add custom links that Channel new customers to your business.
            <br/> 
        </p>
         
    </div> 
    
    <hr className="objectiveDivider"/>      
</section>

</div>




    
  )
}

export default TopSection
