import "./NavbarLinks.css";
// import { TbScubaMask } from "react-icons/tb";
import MyBabbLogo from "../../Assets/MyBabbLogo200x72px.png";
const NavbarLinks = () => {
  return (
    <div>

      <header
        className="  relative z-[10] mt-[-2.85rem]  hidden w-screen justify-center 
              border-2 border-transparent sm:mt-[-.45rem] sm:block sm:justify-center">
                <a href="https://mybabb.com">
            <div className="absolute "> 
             <img src={MyBabbLogo} alt="My BaBB Logo" width={100} className="MyBabbLogo rounded-xl 
               " />
            </div>
            </a>



        <section className="mybabb font-Rye z-[0]    m-auto w-fit border-2 border-transparent">
          <h1 className="hidden">
            <span className="font-Rye whitespace-nowrap text-[.74rem]">
              MyBabb Web Development
            </span>
          </h1>

          {/* xxxxxxxxxxxxxxxxxxxxxxxxxx new area with data tool tips below xxxxxxxxxxxxxxxxxxxxxxx */}
          <nav
            id="aboutNav"
            className="relative  navLinksWrapper  hidden space-x-[5rem] pb-4  text-xl  sm:block
            md:m-auto md:space-x-[9rem] lg:space-x-[14rem] xl:space-x-[18rem]"
            aria-label="main"
          >

            <a
              href="https://mybabb.com"
              className="text-blue-200 hover:text-varDARKBLUEFEATHER "
            >
              <div
                className="dataToolTip1  font-LibreBaskerville "
                data-tool-tip="I am Brett, click here to visit my Website"
              >
                <div className="inline-block rounded-xl border-[1px]  border-varLIGHTBLUEFEATHER">
                  <div className="rounded-xl   border-[2px]  border-black">
                    <div
                      className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                 p-2 hover:bg-black xxs:bg-gray-700"
                    >
                      <span className="NavbarTitle1 font-Aclonica ">Home</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://mybabb.github.io/My_Introduction/"
              className="text-blue-200 hover:text-varDARKBLUEFEATHER "
            >
              <div
                className="dataToolTip2 font-LibreBaskerville"
                data-tool-tip="Click here to see my Skills"
              >
                <div
                  className="inline-block rounded-xl  
                             border-[1px]  border-varLIGHTBLUEFEATHER"
                >
                  <div className="rounded-xl   border-[2px]  border-black">
                    <div
                      className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER p-2
                                 hover:bg-black xxs:bg-gray-700"
                    >
                      <span className="NavbarTitle2 font-Aclonica">
                        Resume&apos;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://mybabb.github.io/About_MyBaBB/"
              className="text-blue-200 hover:text-varDARKBLUEFEATHER "
            >
              <div
                className="dataToolTip2 font-LibreBaskerville"
                data-tool-tip="Click here if you dare"
              >
                <div
                  className="inline-block rounded-xl border-[1px] 
                   border-varLIGHTBLUEFEATHER"
                >
                  <div className="rounded-xl   border-[2px]  border-black">
                    <div
                      className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                 p-2 hover:bg-black xxs:bg-gray-700"
                    >
                      <span className="NavbarTitle3 font-Aclonica">About</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
           {/*  <a
              href="#toScubaMask"
              className="absolute -left-14 top-0 text-varLIGHTBLUEFEATHER hover:text-varLIGHTWING
               md:-left-28 lg:-left-40 xl:-left-60 "
            >
              <div
                className="dataToolTip3 font-LibreBaskerville"
                data-tool-tip="To The Bottom"
              >
                <div
                  className="inline-block rounded-xl  
                             border-[1px]  border-varLIGHTBLUEFEATHER"
                >
                  <div className="rounded-xl   border-[2px]  border-black">
                    <div
                      className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                 p-2 hover:bg-black xxs:bg-gray-700"
                    >
                      <span className="NavbarTitle4">
                        <div className="  hidden sm:block  ">
                          <TbScubaMask
                            size={20}
                            className="z-50 text-blue-200  "
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a> */}
          </nav>

          {/* xxxxxxxxxxxxx new area with data tool tips above xxxxxxxxxxxxx */}
        </section>
      </header>
    </div>
  );
};

export default NavbarLinks;
