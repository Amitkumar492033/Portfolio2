import React from "react";
import Typewriter from "typewriter-effect";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import pdf from "./Resume_.pdf";

const Home = () => {
  const container = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animation.json"),
    });
    return () => instance.destroy();
  }, []);

  return (
    <section name="home" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto px-6 py-16 md:flex md:flex-row md:items-center">
        {/* Left Column */}
        <div className="md:w-1/2 md:pl-16 md:text-left text-center">
          <p className="mb-8 leading-relaxed">
            <p className="text-4xl sm:text-7xl font-bold text-white">
              Hi, There
            </p>
            <h1 className="text-4xl sm:text-7xl font-bold text-white flex">
              I'M <p className="text-purple-800 px-4"> Amit&nbsp;Kumar</p>
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-purple-800 ">
              <Typewriter
                options={{
                  strings: ["MERN Stack Developer", ""],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px] text-2xl">
              I am a 4th-year undergraduate student at VIT Vellore. Currently, I
              am focused on building responsive full-stack web applications.
            </p>
          </p>
          <div class="flex justify-center md:justify-start">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-4 mx-3 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110 ">
              <a href={pdf} download>
                Download Resume
              </a>
            </button>
            <button class="ml-4 inline-flex text-purple-600 bg-gray-300 text-gray-700  border-0 py-2 px-4 focus:outline-none hover:bg-slate-300 rounded text-lg disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110">
              <a href="https://github.com/Amitkumar4920" target="_blank">
                Github
              </a>
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 md:pr-12 xl:pr-20 ">
          <div className="container" class="object-cover" ref={container}></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
