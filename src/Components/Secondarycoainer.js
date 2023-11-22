import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondarycoainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-64 md:pt-12 pl-4 md:pl-10 relative z-20">
        <Movielist
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <Movielist title={"popular"} movies={movies.popularMovies} />
        <Movielist title={"Horrar Movies"} movies={movies.nowPlayingMovies} />
        <Movielist title={"Comedy Movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
}

export default Secondarycoainer