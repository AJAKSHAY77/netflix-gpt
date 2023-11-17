import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../utils/Movieslice";
import { options_api } from "../utils/constant";

const useNowplayingMovies = () => {
  // fetch data from tmdb api
  const Dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options_api
    );
    const json = await data.json();
    console.log(json.results);
    Dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
}
export default useNowplayingMovies