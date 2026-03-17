import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";
import "../../assets/css/componenten/media/movieCard.css"
export default function MovieCard({movie}){

    const {storedMovies} = useContext(MovieContext);

    return <div className={`movie-card ${storedMovies.includes(movie.id) ? 'added' : ''}`}>
        <MoviePoster movie={movie}/>
        <MovieInfo movie={movie}/>
    </div>
}