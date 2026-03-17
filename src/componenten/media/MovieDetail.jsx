import MovieBackdrop from "./MovieBackdrop";
import MovieInfoLong from "./MovieInfoLong";
import Tag from "../tag/Tag";
import TagBox from "../tag/TagBox"
import "../../assets/css/componenten/media/MovieDetail.css";

export default function MovieDetail({movie}){
    return <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="movie-detail">
            <MovieBackdrop movie={movie}/>      
            <MovieInfoLong movie={movie}/>
            <div style={{marginBottom: '1rem'}}>
                <TagBox>
                    {movie.genres.map((genre) => <Tag key={genre.id}>{genre.name}</Tag>)}
                </TagBox>
            </div>
        </div>
    </div>

}