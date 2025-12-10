import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { RiTwitterXLine } from "react-icons/ri";
import WrapperContainer from "../utils/WrapperContainer";

const Footer = () => {
  return (
    <WrapperContainer id="footer" classes="w-full bg-[#2d2e32]">
      <div className="flex flex-col sm:flex-row justify-between gap-5 items-center text-center py-6">
        <h1 className="text-white font-bold tracking-wide text-[1.1rem]">
          Copyright © 2026. All rights are reserved
        </h1>
        <div className="flex gap-6 py-3">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/darshit-jani/"
            target="_blank"
          >
            <PiLinkedinLogoBold className=" text-white text-[1.6rem]" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/darshitjani300"
            target="_blank"
          >
            <FiGithub className="text-[1.6rem] text-white" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://x.com/darshit_life1"
            target="_blank"
          >
            <RiTwitterXLine className="text-[1.6rem] text-white" />
          </motion.a>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Footer;
