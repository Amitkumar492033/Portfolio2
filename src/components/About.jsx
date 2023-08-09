import React from "react";
import photos from "./PortpolioPhoto.jpg";

const About = () => {
  return (
    <section
      name="about"
      className="text-white body-font px-10 py-10 bg-[#0a192f] md:pb-60 pb-28"
    >
      <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-16 md:pl-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 font-medium">
            Hi there! I'm Amit kumar, a passionate web developer with expertise
            in React and front-end development.
          </p>

          <p className="text-lg md:text-xl font-medium">
            Apart from coding👨‍💻, I also love exploring new places, reading books
            📗, and watching Cricket. Feel free to reach out to me if you have
            any questions or if you'd like to discuss a potential project.
          </p>
        </div>

        <div className="md:w-1/2 md:pl-16 pb-16">
          <img
            className="object-cover rounded-full w-64 h-80 mx-auto md:mx-0 mb-6 md:mb-0 shadow-lg hover:scale-110 duration-500"
            src={photos}
            alt="Profile Picture"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
