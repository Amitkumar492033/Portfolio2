import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  text-gray-300 bg-gray-900 pt-7 md:pb-96 pb-28'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 object-cover'>
              <div className='shadow-md shadow-[#CC5500] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110' src={HTML} alt="HTML icon " />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#87CEFA] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#8B8000] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#ADD8E6] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#ffffff] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#f0f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#5a47c5] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#db5252] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#40ae58] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto  disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;

// import React from 'react';

// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
// import GitHub from '../assets/github.png';
// import Tailwind from '../assets/tailwind.png';
// import Mongo from '../assets/mongo.png';

// const Skills = () => {
//   return (
//     <div name='skills' className='w-full min-h-screen text-gray-300 bg-gray-900'>
//       <div className='max-w-6xl mx-auto p-4 md:p-8 flex flex-col justify-center'>
//         <div>
//           <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
//           <p className='py-4'>// These are the technologies I've worked with</p>
//         </div>

//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8 object-cover'>
//           {/* Skill items */}
//           {skillItems.map((skill, index) => (
//             <div
//               key={index}
//               className={`shadow-md ${skill.shadowColor} hover:scale-110 duration-500`}
//             >
//               <img
//                 className='w-20 mx-auto disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110'
//                 src={skill.image}
//                 alt={`${skill.name} icon`}
//               />
//               <p className='my-4'>{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

// // Define your skill items
// const skillItems = [
//   { name: 'HTML', image: HTML, shadowColor: 'shadow-[#CC5500]' },
//   { name: 'CSS', image: CSS, shadowColor: 'shadow-[#87CEFA]' },
//   { name: 'JavaScript', image: JavaScript, shadowColor: 'shadow-[#8B8000]' },
//   { name: 'React', image: ReactImg, shadowColor: 'shadow-[#ADD8E6]' },
//   { name: 'GitHub', image: GitHub, shadowColor: 'shadow-[#ffffff]' },
//   { name: 'Node.js', image: Node, shadowColor: 'shadow-[#f0f]' },
//   { name: 'MongoDB', image: Mongo, shadowColor: 'shadow-[#5a47c5]' },
//   { name: 'Tailwind', image: Tailwind, shadowColor: 'shadow-[#db5252]' },
//   { name: 'Firebase', image: FireBase, shadowColor: 'shadow-[#40ae58]' },
// ];
