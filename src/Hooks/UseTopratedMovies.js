import { useEffect } from "react"
import { options_api } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addtopratedMovies } from "../utils/Movieslice"

const useTopratedMovies = () => {
    const Dispatch = useDispatch()

    const getTopRatedMovies =  async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", options_api)
        const json = await data.json()
        
        Dispatch(addtopratedMovies(json.results));
    }
    useEffect(() => {
       getTopRatedMovies() 
    },[])
}

export default useTopratedMovies;