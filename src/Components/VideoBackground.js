import React from "react";

import { useSelector } from "react-redux";

import UseMovietrailer from "../Hooks/UseMovietrailer";

const VideoBackground = ({ movieid }) => {
  const trailervideo = useSelector((store) => store.movies?.trailervideo);
  // customize hook
  UseMovietrailer(movieid);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailervideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      Start at 0:05
    </div>
  );
};

export default VideoBackground;
