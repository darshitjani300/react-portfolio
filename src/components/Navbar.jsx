import { useContext } from "react";
import WrapperContainer from "../utils/WrapperContainer";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import scrollToSection from "../helper/Scroller";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleSwitch = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="lg:sticky h-14 xl:h-20 top-0 left-0 flex items-center w-full bg-white dark:bg-primary-black shadow-md z-50">
      <WrapperContainer classes="flex justify-between items-center">
        <h1
          className="cursor-pointer font-bold text-[#2d2e32] text-[1.2rem] sm:text-[1.4rem] lg:text-[1.3rem] dark:text-primary-white"
          onClick={() => scrollToSection("home")}
        >
          Darshit.dev
        </h1>

        <button onClick={toggleSwitch} className="cursor-pointer lg:hidden">
          {theme == "dark" ? (
            <MdLightMode size={22} color="white" />
          ) : (
            <MdOutlineDarkMode size={22} />
          )}
        </button>

        <ul className="hidden lg:text-[1.1rem] xl:text-[1rem] text-[#2d2e32] lg:flex font-semibold gap-5 pr-3 dark:text-primary-white">
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
            Work
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-[#147efb] ease-in-out duration-[0.4s]"
          >
            Contact
          </li>
          <li
            className="flex justify-center items-center cursor-pointer hover:text-[#147efb] ease-in-out duration-[0.4s] rounded-full mb-0.5"
            onClick={toggleSwitch}
          >
            {theme == "dark" ? (
              <MdLightMode size={22} />
            ) : (
              <MdOutlineDarkMode size={22} />
            )}
          </li>
        </ul>
      </WrapperContainer>
    </nav>
  );
};

export default Navbar;
