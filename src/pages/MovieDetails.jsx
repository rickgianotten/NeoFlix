import { useParams } from "react-router-dom"
import {getMovieDetails, getMovieImg, getSimilarMovies} from "../services/api/movie.js"
import useFetchData from "../hooks/useFetchData.jsx"
import MainLayout from "../layout/MainLayout.jsx"
import MovieDetail from "../componenten/media/MovieDetail.jsx";
import Loading from "../componenten/displays/Loading.jsx";
import Error from "../componenten/displays/Error.jsx";
import EmptyState from "../componenten/displays/EmptyState.jsx";
import FeatureSection from "../componenten/FeatureSection.jsx";

export default function MovieDetails(){
    const {id} = useParams()

    const {data ,loading, error} = useFetchData(()=>{
        return Promise.all([getMovieDetails(id), getMovieImg(id)])
    });

    const [movie, img] = data
    return <MainLayout>
            {loading && <Loading/>}
            {error && <Error>{error}</Error>}
            {!movie || movie.length == 0 ? 
            <EmptyState>No movie found!</EmptyState> : 
            <> 
                <MovieDetail movie={movie}/> 
                <FeatureSection apiFunction={()=>getSimilarMovies(id)} title="Related Movies" />
            </>}  
        </MainLayout>
}