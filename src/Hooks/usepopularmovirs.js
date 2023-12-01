import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addpopularMovies } from "../utils/Movieslice";
import { MovieList_API, options_api } from "../utils/constant";

const usePopularMovies = () => {
  // fetch data from tmdb api
  const Dispatch = useDispatch();
   const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getpopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options_api
    );
    const json = await data.json();
    //console.log( "results",json.results);
    Dispatch(addpopularMovies(json.results));
  };

  useEffect(() => {
     !popularMovies && getpopularMovies();
  }, []);
};
export default usePopularMovies;
