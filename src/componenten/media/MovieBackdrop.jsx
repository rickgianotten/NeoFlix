export default function MovieBackdrop({movie}){
    return <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} 
    alt={movie.title} 
    style={{color:'var(--neon-blue)', width: '100%', objectFit: 'cover'}}/>
}