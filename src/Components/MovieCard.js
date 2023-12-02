import React from 'react'
import { Img_cdn_url } from '../utils/constant'

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className=" w-32 md:w-36  pr-4 hover:w-48">
      <img alt="moviecard" src={Img_cdn_url + posterpath} />
    </div>
  );
}

export default MovieCard