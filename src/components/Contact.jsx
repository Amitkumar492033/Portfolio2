// import React from 'react'

// const Contact = () => {
//   return (
//     <div name='contact' className='w-full h-screen flex justify-center items-center px-14 py-10 bg-gray-900'>
//         <form method='POST' action="https://getform.io/f/2d3b3392-a60c-4442-b4c1-2e255888935a" className='flex flex-col max-w-[600px] w-full'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
//                 <p className='text-gray-300 py-4 text-4xl font-bold'>Get in touch using the form</p>
//             </div>
//             <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6] rounded-lg  disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110  hover:ring-blue-500 hover:shadow-md p-2 m-2'/>
//             <input type="email" placeholder='Email' name='email' className='bg-[#ccd6f6] rounded-lg  disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110  hover:blue-300 hover:shadow-md p-2 m-2' />
//             <textarea name="message" rows="10" placeholder='Message' className='bg-[#ccd6f6] rounded-lg  disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110  hover:blue-300 hover:shadow-md p-2 m-2'></textarea>
//             <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110'>Let's Collaborate</button>
//         </form>
//     </div>
//   )
// }

// export default Contact


import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center px-10 py-16 bg-gray-900'>
      <form method='POST' action="https://getform.io/f/2d3b3392-a60c-4442-b4c1-2e255888935a" className='flex flex-col max-w-[600px] w-full bg-gray-800 rounded-md p-8 shadow-lg'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4 text-2xl font-bold'>Get in touch using the form</p>
        </div>
        <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6] rounded-lg p-4 mb-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 hover:shadow-md disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-100  hover:ring-blue-500 ' />
        <input type="email" placeholder='Email' name='email' className='bg-[#ccd6f6] rounded-lg p-4 mb-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 hover:shadow-md disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-100  hover:ring-blue-500 ' />
        <textarea name="message" rows="6" placeholder='Message' className='bg-[#ccd6f6] rounded-lg p-4 mb-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 hover:shadow-md disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-100  hover:ring-blue-500 '></textarea>
        <button className='text-white bg-pink-600 hover:bg-pink-700 px-6 py-3 my-4 mx-auto rounded-md focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-50 disabled:transform-none disabled:transition-none disabled:cursor-not-allowed transition duration-500 ease-in-out transform hover:translate-x-1 hover:scale-110  hover:ring-blue-500 hover:shadow-md'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
