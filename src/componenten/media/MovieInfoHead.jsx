import StarRating from "./StarRating"

export default function MovieInfoHead({movie}){

    return <div>
            <h3 style={{ color: "var(--text-soft-white)"}}>{movie.title}</h3>
            <p style={{color: "var(--accent-blue)"}}>Release: {movie.release_date}</p>
            <StarRating voteAverage={movie.vote_average}/>
        </div>
}