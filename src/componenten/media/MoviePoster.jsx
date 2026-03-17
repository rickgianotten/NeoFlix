export default function MoviePoster({movie}){
    return <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} style={{color:'var(--neon-blue)'}}/>
}