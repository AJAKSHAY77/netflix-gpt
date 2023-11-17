import React from 'react'

const VideoTitle = ({ title,overview}) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 w-1/4 text-lg">{overview}</p>
      <div>
        <button className="bg-gray-500 p-4 px-12  text-xl text-white bg-opacity-70 rounded-lg">
         
          ▶ Play
        </button>
        <button className="bg-gray-500 p-4 px-12 mx-2  text-xl text-white bg-opacity-70 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle