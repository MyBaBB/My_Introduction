import "./NavbarLinks.css";
import ScubaMask from "../ScubaNavFolder/ScubaMask";
import ContactButton from "../ContactButton";
import EmailButton from "../EmailButton";
const NavbarLinks = () => {
  return (
    <div className=" relative flex w-screen justify-between  p-2 ">
      <ScubaMask />
      <ContactButton />
      <EmailButton />
    </div>
  );
};

export default NavbarLinks;
