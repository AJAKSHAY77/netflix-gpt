import React from 'react'
import { Img_cdn_url } from '../utils/constant'

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className="w-36  pr-4">
      <img alt="moviecard" src={Img_cdn_url + posterpath} />
    </div>
  );
}

export default MovieCard