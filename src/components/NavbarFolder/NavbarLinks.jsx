import "./NavbarLinks.css";
import DiverDown from "../ScubaManFolder/DiverDown"
import ContactButton from "../ContactButtonFolder/ContactButton";
import EmailButton from "../EmailButton";
const NavbarLinks = () => {
  return (
    <div id="diverDown" className=" relative flex w-screen justify-between scroll-mt-80 p-2 ">
<a href="#scubaSpear"> 
       <div  className="hidden xxs:flex">
         <DiverDown />
       </div>
       </a>

<div className="m-auto">
      <ContactButton />
</div>

      <div className="hidden xxs:flex mt-8">
      <EmailButton />
    </div>
    </div>
  );
};

export default NavbarLinks;
