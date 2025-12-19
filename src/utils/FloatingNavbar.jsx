import { IoHomeOutline } from "react-icons/io5";
import { BsFillSignIntersectionYFill } from "react-icons/bs";
import {
  MdLightMode,
  MdOutlineDarkMode,
  MdOutlineWorkHistory,
} from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import scrollToSection from "../helper/Scroller";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const FloatingNavbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleSwitch = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="lg:hidden h-14 bg-[#2d2e32]">
      <div className="fixed bottom-2 left-0 right-0 flex justify-center items-center">
        <div className="flex items-center justify-between border-2 border-transparent dark:border-2 dark:border-transparent bg-[#F9FAFB] dark:bg-[#262626] p-3 py-2 rounded-3xl z-10 max-w-lg gap-5">
          <motion.button
            onClick={() => scrollToSection("home")}
            className="bg-[#E6E7EB] p-2 rounded-full dark:bg-[#2d2e32]"
            whileTap={{ scale: 1.1 }}
          >
            <IoHomeOutline
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300 text-primary-black dark:text-primary-white"
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("about")}
            className="bg-[#E6E7EB] p-2 rounded-full dark:bg-[#2d2e32]"
            whileTap={{ scale: 1.1 }}
          >
            <BsFillSignIntersectionYFill
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300 text-primary-black dark:text-primary-white "
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("project")}
            className="bg-[#E6E7EB] p-2 rounded-full dark:bg-[#2d2e32]"
            whileTap={{ scale: 1.1 }}
          >
            <MdOutlineWorkHistory
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300 text-primary-black dark:text-primary-white"
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="bg-[#E6E7EB] p-2 rounded-full dark:bg-[#2d2e32]"
            whileTap={{ scale: 1.1 }}
          >
            <IoMdContact
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300 text-primary-black dark:text-primary-white"
            />
          </motion.button>

          <div className="h-8 w-0.5 bg-gray-500"></div>

          <motion.button
            onClick={toggleSwitch}
            className="bg-[#E6E7EB] p-2 rounded-full dark:bg-[#2d2e32]"
            whileTap={{ scale: 1.1 }}
          >
            {theme == "dark" ? (
              <MdLightMode size={22} color="white" />
            ) : (
              <MdOutlineDarkMode size={22} />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;
