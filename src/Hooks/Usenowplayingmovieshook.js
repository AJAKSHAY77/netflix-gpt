import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../utils/Movieslice";
import { MovieList_API, options_api } from "../utils/constant";

const useNowplayingMovies = () => {
  // fetch data from tmdb api
  const Dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(MovieList_API, options_api);
    const json = await data.json();
    //console.log( "results",json.results);
    Dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  },[]);
}
export default useNowplayingMovies