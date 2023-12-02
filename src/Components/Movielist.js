import React from "react";
import MovieCard from "./MovieCard";

const Movielist = ({ title, movies }) => {
    // console.log(movies);
    if (!movies) return;
  return (
    <div className="px-6">
      <h1 className=" text-xl md:text-3xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll overflow-hidden hideScrollbar">
        <div className="flex">
          {movies.map((el) => (
            <MovieCard key={el.id} posterpath={el.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
