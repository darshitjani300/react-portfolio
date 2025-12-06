import { TbMap2 } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white px-2 py-14 md:px-10 md:py-16 xl:px-52 xl:py-20"
    >
      <div className="flex flex-col md:flex-col md:items-start justify-center items-center gap-2 text-center pb-10">
        <h1 className="text-[1.1rem] font-bold text-[#147EFB]">CONTACT</h1>
        <h2 className="text-[1.6rem] font-bold leading-9">
          Feel free to reach out 👇
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center md:text-start text-center gap-10 xl:gap-14 my-5">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <TbMap2
            className="text-[3rem] p-2 rounded-2xl shadow-xl"
            color="#147EFB"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-[1.1rem]">Location</h1>
            <p className="text-[1rem] cursor-pointer text-[#767676] hover:text-blue-500 duration-150 ease-in">
              Ahmedabad, India
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <AiOutlineMail
            className="text-[3rem] p-2 rounded-2xl shadow-xl"
            color="#147EFB"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-[1.1rem]">Mail</h1>
            <a
              href="mailto:darshitdeveloper300@gmail.com"
              className="text-[1rem] text-[#767676] hover:text-blue-500 duration-150 ease-in"
            >
              darshitdeveloper300@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
