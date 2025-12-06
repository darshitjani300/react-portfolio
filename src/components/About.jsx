const About = () => {
  return (
    <section
      id="about"
      className="bg-white w-full py-5 lg:px-5 lg:py-20 xl:px-40 px-5"
    >
      <div className="py-12 flex items-center flex-col lg:grid lg:grid-cols-2 lg:justify-between">
        <div className="relative sm:h-[350px] 2xl:justify-self-center sm:w-[420px] px-3">
          <img
            src="main.png"
            alt="bg"
            loading="lazy"
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="hidden sm:block absolute bottom-[-30px] right-[-55px]">
            <div className="hidden sm:block bg-white h-[135px] w-[135px] z-[40] relative ml-10 rounded-[50%]">
              <img
                src="circle.png"
                loading="lazy"
                alt="circle"
                className="absolute h-[130px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] imageSpin"
              />
              <img
                src="circleinn.png"
                loading="lazy"
                alt="innerCircle"
                className="absolute h-[60px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col 2xl:justify-self-start 2xl:px-20 items-center text-center lg:text-start gap-3 px-2 sm:px-24 lg:px-0">
          <h3 className="text-[1rem] sm:text-[1.1rem] lg:w-full lg:mt-0 font-bold text-blue-500 mt-10">
            ABOUT ME
          </h3>
          <h1 className="font-bold text-[#2d2e32] w-full text-[1.6rem] sm:px-3 lg:px-0 leading-9">
            A dedicated Full Stack Developer based in Ahmedabad, India 📍
          </h1>
          <p className="text-[1rem] text-[#767676]">
            As a Web Developer, I bring strong expertise in HTML, CSS,
            JavaScript, Tailwind, and React, along with full-stack experience
            using the MERN stack. I excel at designing and building responsive,
            high-quality web applications that deliver smooth and engaging user
            experiences. I focus on writing clean, optimized code and leveraging
            modern development tools to create scalable, maintainable solutions.
            I’m also a collaborative team player who enjoys turning ideas into
            polished, functional products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
