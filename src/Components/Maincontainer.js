import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Maincontainer = () => {
    const Movies = useSelector((store) => store.movies?.nowPlayingMovies);

   // if (Movies === null) return;
         if(!Movies)return; 
  const MainMovies = Movies[1];
  //  console.log(MainMovies);
    const { original_title, overview,id } = MainMovies;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieid={id}/>
    </div>
  );
};

export default Maincontainer;
