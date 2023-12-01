import { useRef } from "react";
import lang from "../utils/LanguageConstant";

import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/Openai";
import { options_api } from "../utils/constant";
import { addGptMovieResult } from "../utils/GptSearchSlice";


const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const Dispatch = useDispatch()

  // search movie tmdb
  const searchMovieTmdb = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", options_api);
    const json = await data.json() 
    return json.results;
  };

  const Handlesearchbutton = async () => {
    // console.log(searchText?.current?.value);
    // make api call  to gpt api and  get movie results
    const gptQuery =
      "Act  as movies Recommendation system  and suggest some  more moveis for the query" +
      searchText.current.value +
      ". only give me names of five movies ,comma seperated  like the example result given ahead. example Result : Gadar,Sholay,Don ,Pathan,Golmal ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    //console.log(gptResults.choices?.[0]?.message?.content);

    const Gptmovies = gptResults.choices?.[0]?.message?.content.split(",");

    //  "Hera Pheri, Andaz Apna Apna, Chupke Chupke, Angoor, Gol Maal";

    // for each movie i will search tmdb api
    const PromiseArray = Gptmovies.map((movie) => searchMovieTmdb(movie));
    // we have five movies so five time promise will be run here

    //[promise,promise,promise,promise,promise]

    const AllpromiseFinalResult = await Promise.all(PromiseArray);
    console.log(AllpromiseFinalResult);
    Dispatch(addGptMovieResult({ MoviesNames: Gptmovies, GptResults: AllpromiseFinalResult }));

  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[languageKey].GptplaceHolder}
        />
        <button
          onClick={Handlesearchbutton}
          className="py-2 px-4  m-4 bg-red-700 text-white rounded-lg col-span-3"
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
