import React from 'react'

const VideoTitle = ({ title,overview}) => {
  return (
    <div className=" w-screen  aspect-video pt-[13%]  px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="  hidden md:inline-block py-3 w-1/2 text-lg">{overview}</p>
      <div className='my-4 md:m-0'>
        <button className="bg-white py-1 md:py-4 px-3  text-xl text-black font-bold bg-opacity-100 rounded-lg hover:bg-opacity-80">
         
          ▶ Play
        </button>
        <button className=" hidden md:inline-block bg-gray-500 p-4 px-12 mx-2 my-2 text-xl text-white bg-opacity-70 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle