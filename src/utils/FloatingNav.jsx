import { IoHomeOutline } from "react-icons/io5";
import { BsFillSignIntersectionYFill } from "react-icons/bs";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const FloatingNav = () => {
  return (
    <div className="lg:hidden h-14 bg-[#2d2e32] ">
      <div className="fixed bottom-2 left-0 right-0 flex justify-center items-center ">
        <div className="flex items-center justify-center gap-10 border-2 border-transparent dark:border-2 dark:border-white bg-primary-black p-3 py-2 rounded-3xl">
          <a href="https://www.linkedin.com/in/darshit-jani/" target="_blank">
            <IoHomeOutline
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300  text-primary-white"
            />
          </a>

          <a href="https://github.com/darshitjani300" target="_blank">
            <BsFillSignIntersectionYFill
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300  text-primary-white"
            />
          </a>

          <a href="https://x.com/darshit_life1" target="_blank">
            <MdOutlineWorkHistory
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300  text-primary-white"
            />
          </a>
          <a href="https://x.com/darshit_life1" target="_blank">
            <IoMdContact
              size="1.6rem"
              className="hover:text-[#147efb] ease-in-out duration-300  text-primary-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;
