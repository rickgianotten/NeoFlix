import { getMovieDetails } from "../services/api/movie";
import useFetchData from "./useFetchData";
import  {useContext} from "react";
import { MovieContext } from "../context/MovieContext";
export default function useStoredMovies(){

    const {storedMovies} = useContext(MovieContext);

    const {data, loading, error} = useFetchData(()=>{
        return Promise.all(storedMovies.map((movieId)=> getMovieDetails(movieId)));
    },[storedMovies])

    return {data, loading, error}

}   