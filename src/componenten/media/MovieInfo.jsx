import { useContext } from "react";
import { MovieContext } from '../../context/MovieContext';
import NavButton from "../buttons/NavButton";
import OutlineButton from "../buttons/OutlineButton";
import MovieInfoHead from "./MovieInfoHead";
import { IoIosAdd, IoMdCheckmark } from "react-icons/io";
import "../../assets/css/componenten/media/movieInfo.css";
import ButtonBox from '../buttons/ButtonBox'
export default function MovieInfo({movie}){

    const {storeMovie, storedMovies, isStored} = useContext(MovieContext)

    return <div className="movie-info">
        <MovieInfoHead movie={movie}/>
        <ButtonBox>
            <NavButton to={`/movies/${movie.id}`}>Details</NavButton>
            <OutlineButton onClick={()=> storeMovie(movie.id)} className={ isStored(movie.id) ? 'filled' : ''}>
                { isStored(movie.id) ? <IoMdCheckmark/> : <IoIosAdd/>} my list
            </OutlineButton>
        </ButtonBox>

    </div>
}