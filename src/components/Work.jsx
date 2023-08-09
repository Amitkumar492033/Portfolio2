import React from "react";
import { data } from "../data/data.js";
import {FaLink} from "react-icons/fa"

const Work = () => {
  const project = data;

  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 px-4 md:px-4 py-8 pt-32  bg-gray-900 md:pb-96 pb-28"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "100% 100%", // Image covers the entire container
                backgroundPosition: "center", // Center the image within the container
              }}
              className="shadow-lg shadow-[#800080] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:scale-105"
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name} 
                </span>
                <p>{item.description}</p>
                <div className="pt-4 text-center ">
                  {/* <a href={item.github} target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a> */}
                  <a href={item.live} target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      <FaLink size={25}/>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
