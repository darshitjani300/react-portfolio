import { TbMap2 } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import WrapperContainer from "../utils/WrapperContainer";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-primary-black">
      <WrapperContainer
        isSection={false}
        id="contact"
        classes=" py-14 md:py-16 xl:py-20"
      >
        <div className="flex flex-col md:flex-col md:items-start justify-center items-center gap-2 text-center pb-10 scroll-mt-20">
          <h1 className="text-[1.1rem] font-bold text-[#147EFB]">CONTACT</h1>
          <h2 className="text-[1.6rem] font-bold leading-9 dark:text-primary-white">
            Feel free to reach out 👇
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:text-start text-center gap-10 xl:gap-14 my-5">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <TbMap2
              className="text-[3rem] p-2 rounded-2xl shadow-xl"
              color="#147EFB"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-[1.1rem] dark:text-primary-white">
                Location
              </h1>
              <p className="text-[1rem] cursor-pointer text-[#767676] hover:text-blue-500 duration-150 ease-in dark:text-primary-gray">
                Ahmedabad, India
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <AiOutlineMail
              className="text-[3rem] p-2 rounded-2xl shadow-xl"
              color="#147EFB"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-[1.1rem] dark:text-primary-white">
                Mail
              </h1>
              <a
                href="mailto:darshitdeveloper300@gmail.com"
                className="text-[1rem] text-[#767676] hover:text-blue-500 duration-150 ease-in dark:text-primary-gray"
              >
                darshitdeveloper300@gmail.com
              </a>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default Contact;
