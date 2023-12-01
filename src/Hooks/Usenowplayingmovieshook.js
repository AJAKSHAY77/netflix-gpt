import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addnowPlayingMovies } from "../utils/Movieslice";
import { MovieList_API, options_api } from "../utils/constant";

const useNowplayingMovies = () => {
  // fetch data from tmdb api
  const Dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const getNowPlayingMovie = async () => {
    const data = await fetch(MovieList_API, options_api);
    const json = await data.json();
    //console.log( "results",json.results);
    Dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {

    !nowPlayingMovies && getNowPlayingMovie();
  },[]);
}
export default useNowplayingMovies