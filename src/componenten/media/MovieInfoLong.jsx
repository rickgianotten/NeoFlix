import OutlineButton from "../buttons/OutlineButton";
import NavButton from "../buttons/NavButton";
import MovieInfoHead from "./MovieInfoHead";
import { IoIosAdd, IoMdCheckmark } from "react-icons/io";
import {MovieContext} from "../../context/MovieContext";
import { useContext } from "react";
import ButtonBox from "../buttons/ButtonBox"
export default function MovieInfoLong({movie}){

    const {storeMovie, isStored} = useContext(MovieContext);
    
    return <div>
        <MovieInfoHead movie={movie}/>
        <p style={{color: 'var(--text-soft-white)', paddingBottom: '1rem'}}>{movie.overview}</p>
        <ButtonBox>
            <NavButton to={movie.homepage} target="_blank">Watch movie</NavButton>
            <OutlineButton onClick={()=> storeMovie(movie.id)} className={ isStored(movie.id) ? 'filled' : ''}>
                { isStored(movie.id) ? <IoMdCheckmark/> : <IoIosAdd/>} my list
            </OutlineButton>
        </ButtonBox>

    </div>
}