import { IoMdOpen } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import WrapperContainer from "../utils/WrapperContainer";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const data = [
    {
      image: "ebook.png",
      title: "Ebookify",
      subTitle: "December 2025",
      description: `An AI-powered eBook creation platform that helps users generate structured content and build complete eBooks through a guided, seamless workflow.`,
      link: "https://ebookify.vercel.app/",
      github: "https://github.com/darshitjani300/mern-ai-ebook-creator",
      techStack: ["React", "Tailwind CSS"],
      socialBtns: [{ Github: <FiGithub /> }, { "Live Demo": <IoMdOpen /> }],
    },
    {
      image: "pingxo.png",
      title: "PingXo",
      subTitle: "October 2025",
      description:
        "A real-time chat application is a web-based platform that enables instant one-to-one messaging. It provides secure, low-latency real-time communication with protected access and a smooth user experience across devices.",
      link: "https://pingxo.vercel.app",
      github: "https://github.com/darshitjani300/mern-pingxo-frontend",
      techStack: ["React", "Tailwind CSS"],
      socialBtns: [{ Github: <FiGithub /> }, { "Live Demo": <IoMdOpen /> }],
    },

    {
      image: "car-rental.png",
      title: "Car Rental",
      subTitle: "SEPTEMBER 2023",
      description:
        "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      link: "https://rental-car300.netlify.app",
      github: "https://github.com/darshitjani300/react-rental-car",
      techStack: ["React", "Tailwind CSS"],
      socialBtns: [{ Github: <FiGithub /> }, { "Live Demo": <IoMdOpen /> }],
    },
    {
      image: "gym-ecom.png",
      title: "GYMNITE",
      subTitle: "SEPTEMBER 2023",
      description: `A GYMNITE website, with its focus on simplicity and clean design, along with a touch of Swipers, is a comprehensive resource for fitness information and products. This ensures an easy user experience and allows customers to find and purchase the products they need.`,
      link: "https://gym-ecom.netlify.app",
      github: "https://github.com/darshitjani300/react-gym-ecom",
      techStack: ["React", "Tailwind CSS"],
      socialBtns: [{ Github: <FiGithub /> }, { "Live Demo": <IoMdOpen /> }],
    },
  ];

  return (
    <WrapperContainer
      id="project"
      classes="min-h-[calc(100vh-80px)] flex flex-col py-5 md:py-10 md:scroll-mt-20"
    >
      <div className="flex flex-col sm:items-start justify-center items-center gap-3 text-center">
        <h1 className="text-[1rem] font-bold text-[#147EFB] leading-5">
          PORTFOLIO
        </h1>
        <h2 className="text-[1.6rem] font-bold leading-9 dark:text-primary-white">
          Each project is a unique piece of development 🧩
        </h2>
        <div className="px-3 md:px-0 my-10">
          <div className="grid gap-5 sm:gap-20 grid-rows-2 xl:grid-rows-1 grid-cols-1">
            <AnimatePresence>
              {(showAll ? data : data.slice(0, 2))?.map((item, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex bg-white dark:bg-primary-black border border-slate-50 shadow-sm rounded-xl flex-col lg:grid lg:grid-cols-2 lg:items-center gap-2 p-4 sm:p-10"
                    key={index}
                  >
                    <motion.a
                      whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
                      href={item.link}
                      target="_blank"
                      className="w-full"
                    >
                      <img
                        src={item.image}
                        className="rounded-xl shadow-lg"
                        alt="car-rental"
                      />
                    </motion.a>

                    <div className="flex flex-col text-center lg:px-10 items-center gap-5 pt-10 lg:pt-0">
                      <h1 className="font-bold text-[1.1rem] dark:text-primary-white">
                        {item.title}{" "}
                        <span className="text-[hsla(0,5%,8%,.773)] text-[0.9rem] dark:text-primary-gray">
                          ({item.subTitle})
                        </span>
                      </h1>
                      <p className="text-[#767676] font-medium tracking-wide px-2 dark:text-primary-gray">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-center gap-5">
                        {item.techStack.map((item, index) => {
                          return (
                            <button
                              key={index}
                              className="cursor-text p-2 font-bold shadow-md dark:bg-primary-white rounded-sm"
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                      <div className="flex items-center justify-center gap-5 ">
                        <a
                          href={item.github}
                          target="_blank"
                          className="flex items-center font-semibold gap-2 hover:text-[#147efb] ease-in-out cursor-pointer duration-300 dark:text-primary-white"
                        >
                          {" "}
                          Github
                          <FiGithub className="text-[1.6rem] dark:text-primary-white" />
                        </a>
                        <a
                          href={item.link}
                          target="_blank"
                          className="flex items-center gap-2 font-semibold hover:text-[#147efb]  ease-in-out cursor-pointer duration-300 dark:text-primary-white"
                        >
                          Live Demo
                          <IoMdOpen className="text-[1.6rem] dark:text-primary-white" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center gap-2 text-[#147EFB] font-semibold hover:scale-95 transition-all duration-300 cursor-pointer"
            >
              {showAll ? (
                <IoChevronUp className="text-2xl" />
              ) : (
                <IoChevronDown className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Projects;
