import "../assets/css/componenten/cardGrid.css";
import MovieCard from "./media/MovieCard";

export default function CardGrid({movies}){
    return <div className="card-grid-layout">
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>

}