import { IoHomeOutline } from "react-icons/io5";
import { BsFillSignIntersectionYFill } from "react-icons/bs";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import scrollToSection from "../helper/Scroller";

const FloatingNavbar = () => {
  return (
    <div className="lg:hidden h-14 bg-[#2d2e32]">
      <div className="fixed bottom-2 left-0 right-0 flex justify-center items-center ">
        <div className="flex items-center justify-center gap-10 border-2 border-transparent dark:border-2 dark:border-transparent bg-[#F9FAFB] dark:bg-[#262626] p-3 py-2 rounded-3xl z-10">
          <button
            onClick={() => scrollToSection("home")}
            className="bg-[#E6E7EB] p-2 rounded-full dark:bg-[#2d2e32]"
          >
            <IoHomeOutline
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300 text-primary-black dark:text-primary-white"
            />
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="bg-[#E6E7EB] p-2 rounded-full dark:bg-[#2d2e32]"
          >
            <BsFillSignIntersectionYFill
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300 text-primary-black dark:text-primary-white "
            />
          </button>

          <button
            onClick={() => scrollToSection("project")}
            className="bg-[#E6E7EB] p-2 rounded-full dark:bg-[#2d2e32]"
          >
            <MdOutlineWorkHistory
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300 text-primary-black dark:text-primary-white"
            />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#E6E7EB] p-2 rounded-full dark:bg-[#2d2e32]"
          >
            <IoMdContact
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300 text-primary-black dark:text-primary-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;
