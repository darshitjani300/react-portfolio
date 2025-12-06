import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShowNav(false);
    }
  };

  return (
    <div className="shadow-md w-screen bg-white overflow-hidden fixed top-0 left-0 z-50 flex justify-between items-center p-6 md:px-8 lg:px-12 xl:px-14 mb-10">
      <h1 className="cursor-pointer font-bold text-[#2d2e32] text-[1.2rem] sm:text-[1.4rem] lg:text-[1.3rem]">
        Darshit.dev
      </h1>

      <AiOutlineMenu
        className="lg:hidden text-[25px] sm:text-[30px]"
        onClick={() => setShowNav(!showNav)}
      />

      {showNav && (
        <div className="h-screen w-screen fixed top-0 left-0 z-50 bg-white text-black">
          <AiOutlineClose
            size={30}
            className=" w-full my-10"
            onClick={() => setShowNav(!showNav)}
          />
          <ul className="w-[50%] text-center mx-auto flex gap-5 flex-col font-semibold">
            <li className="cursor-pointer hover:text-[#147efb] ease-in-out duration-[0.4s]">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#147efb] ease-in-out duration-[0.4s]">
              About
            </li>
            <li className="cursor-pointer hover:text-[#147efb] ease-in-out duration-[0.4s]">
              Projects
            </li>
            <li className="cursor-pointer hover:text-[#147efb] ease-in-out duration-[0.4s]">
              Contact
            </li>
          </ul>
        </div>
      )}

      <ul className="hidden lg:text-[1.1rem] xl:text-[1rem] text-[#2d2e32] lg:flex font-semibold gap-5 pr-3">
        <li
          onClick={() => scrollToSection("home")}
          className="cursor-pointer hover:text-[#147efb] ease-in-out duration-[0.4s]"
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection("about")}
          className="cursor-pointer hover:text-[#147efb] ease-in-out duration-[0.4s]"
        >
          About
        </li>
        <li
          onClick={() => scrollToSection("project")}
          className="cursor-pointer hover:text-[#147efb] ease-in-out duration-[0.4s]"
        >
          Projects
        </li>
        <li
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer hover:text-[#147efb] ease-in-out duration-[0.4s]"
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
