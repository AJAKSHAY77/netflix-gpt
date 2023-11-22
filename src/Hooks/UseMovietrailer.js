import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options_api } from '../utils/constant';
import { addtrailerVideo } from '../utils/Movieslice';

const UseMovietrailer = (movieid) => {
  const dispatch = useDispatch();

  //fetch  trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "/videos?languange=en-us",
      options_api
    );
    const json = await data.json();
    //console.log("the trailer api", json.results);
    const Filter_data = json.results.filter((el) => el.type === "Trailer");
    //console.log("trailer_apiresult ", Filter_data);
    //giving two trailers
    //we will choose one
    const trailer = Filter_data.length ? Filter_data[0] : json.results[0];
    console.log("final trailer", trailer);
    dispatch(addtrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default UseMovietrailer