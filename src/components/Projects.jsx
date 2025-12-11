import { IoMdOpen } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import WrapperContainer from "../utils/WrapperContainer";

const Projects = () => {
  const data = [
    {
      image: "car-rental.png",
      title: "Car Rental",
      subTitle: "SEPTEMBER 2023",
      description:
        "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      link: "https://rental-car300.netlify.app",
      github: "https://github.com/darshitjani300/rental-car",
      techStack: ["React", "Tailwind CSS"],
      socialBtns: [{ Github: <FiGithub /> }, { "Live Demo": <IoMdOpen /> }],
    },
    {
      image: "gym-ecom.png",
      title: "GYMNITE",
      subTitle: "SEPTEMBER 2023",
      description: `A GYMNITE website, with its focus on simplicity and clean design, along with a touch of Swipers, is a comprehensive resource for fitness information and products. This ensures an easy user experience and allows customers to find and purchase the products they need.`,
      link: "https://gym-ecom.netlify.app",
      github: "https://github.com/darshitjani300/gym-ecom",
      techStack: ["React", "Tailwind CSS"],
      socialBtns: [{ Github: <FiGithub /> }, { "Live Demo": <IoMdOpen /> }],
    },
  ];

  return (
    <WrapperContainer
      id="project"
      classes="min-h-[calc(100vh-80px)] flex flex-col py-5 md:py-10 scroll-mt-20"
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
            {data.map((item, index) => {
              return (
                <div
                  className="flex bg-white dark:bg-primary-black border-2 border-transparent dark:border-2 dark:border-primary-white shadow-md rounded-xl flex-col lg:grid lg:grid-cols-2 lg:items-center gap-2 p-4 sm:p-10"
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Projects;
