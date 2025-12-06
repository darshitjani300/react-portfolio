import { PiLinkedinLogoBold } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col mt-20 lg:flex-row-reverse lg:items-start lg:justify-around lg:px-5 lg:py-20 xl:px-52 xl:justify-between items-center justify-center text-center lg:text-start px-5 xl:mt-32"
    >
      <div className="h-[200px] w-[200px] lg:h-[320px] lg:w-[320px] my-5">
        <img
          src="photo.jpg"
          className="h-full w-full rounded-[50%] border-[2px] border-black object-cover"
          alt="photo"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-7 mb-5 max-w-[400px] sm:max-w-[450px] lg:max-w-[550px] lg:p-5 justify-start items-center lg:items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#2d2e32] font-bold text-[2rem] lg:text-[2.5rem] xl:text-[2.8rem] leading-[1.2]">
            Full Stack Developer{" "}
          </h1>
          <p className="text-[#555] tracking-wide text-[1.1rem] font-[400]">
            Hi, I'm Darshit Jani. A passionate Web Developer based in Ahmedabad,
            India.
          </p>
        </div>
        <div className="flex items-center justify-center w-full lg:justify-start gap-6">
          <a href="https://www.linkedin.com/in/darshit-jani/" target="_blank">
            <PiLinkedinLogoBold
              size="1.8rem"
              className="hover:text-[#147efb] ease-in-out cursor-pointer duration-[0.3s]"
            />
          </a>

          <a href="https://github.com/darshitjani300" target="_blank">
            <FiGithub
              size="1.8rem"
              className="hover:text-[#147efb] ease-in-out cursor-pointer duration-[0.3s]"
            />
          </a>

          <a href="https://x.com/darshit_life1" target="_blank">
            <RiTwitterXFill
              size="1.8rem"
              className="hover:text-[#147efb] ease-in-out cursor-pointer duration-[0.3s]"
            />
          </a>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row  gap-7 mt-10">
          <h1 className="text-[#2d2e32] font-semibold text-[1rem] border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-black pb-2">
            Tech Stack{" "}
          </h1>
          <ul className="flex flex-col items-center justify-center  pb-5 gap-5 w-full">
            <div className="flex items-center justify-center gap-5">
              <div className="flex items-center gap-5">
                <motion.li
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=express"
                    loading="lazy"
                    className="h-[3rem] md:h-[3.2rem] cursor-pointer"
                  />
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <img
                    src="https://skillicons.dev/icons?i=mongodb"
                    loading="lazy"
                    className="h-[3rem] md:h-[3.2rem] cursor-pointer"
                  />
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=redux"
                    className="h-[3rem] md:h-[3.2rem] cursor-pointer"
                    loading="lazy"
                  />
                </motion.li>
              </div>

              <div className="flex items-center gap-5">
                <motion.li
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    loading="lazy"
                    className="h-[3rem] md:h-[3.2rem] cursor-pointer"
                  />
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=nextjs"
                    loading="lazy"
                    className="h-[3rem] md:h-[3.2rem] cursor-pointer"
                  />
                </motion.li>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5">
              <motion.li
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=react"
                  loading="lazy"
                  className="h-[3rem] md:h-[3.2rem] cursor-pointe"
                />
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=postgres"
                  className="h-[3rem] md:h-[3.2rem] cursor-pointer"
                  loading="lazy"
                />
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=nodejs"
                  className="h-[3rem] md:h-[3.2rem] cursor-pointer"
                  loading="lazy"
                />
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=ts"
                  className="h-[3rem] md:h-[3.2rem] cursor-pointer"
                  loading="lazy"
                />
              </motion.li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
