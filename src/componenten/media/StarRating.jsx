import voteAverageToStars from "../../utils/convertVote";
import { MdOutlineStar, MdOutlineStarBorder ,MdOutlineStarHalf } from "react-icons/md";

export default function StarRating({voteAverage}){

    const {full, half, empty} = voteAverageToStars(voteAverage);

    return <div style={{color: "var(--accent-yellow)"}}>
        {[...Array(full)].map((_, i)=>{
            return <MdOutlineStar key={i}/>
        })}
        {half && <MdOutlineStarHalf/>}
        {[...Array(empty)].map((_, i)=>{
            return <MdOutlineStarBorder key={i}/>
        })}
    </div>

}