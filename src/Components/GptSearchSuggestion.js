import React from "react";
import { useSelector } from "react-redux";

import Movielist from './Movielist';

const GptSearchSuggestion = () => {
  const Gpt = useSelector((store) => store.GptSearch);
  const {MoviesNames, GptMovieResult} = Gpt

  // we can write above code in single line
  // const { GptMovieResult, MoviesNames } = useSelector(
  //   (store) => store.GptSearch
  // );
  if(!MoviesNames) return null;

  

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {MoviesNames.map((el,index) => (
        <Movielist key={el} title={el} movies={GptMovieResult[index]}/>
      ))}
    </div>
  );
};

export default GptSearchSuggestion;
