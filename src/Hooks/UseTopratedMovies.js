import { useEffect } from "react"
import { options_api } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addtopratedMovies } from "../utils/Movieslice"

const useTopratedMovies = () => {
    const Dispatch = useDispatch()

    const TopratedMovies = useSelector((store => store.movies.topratedMovies));

    const getTopRatedMovies =  async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", options_api)
        const json = await data.json()
        
        Dispatch(addtopratedMovies(json.results));
    }
    useEffect(() => {
       !TopratedMovies && getTopRatedMovies() 
    },[])
}

export default useTopratedMovies;