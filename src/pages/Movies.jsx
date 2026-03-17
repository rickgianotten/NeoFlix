import MainLayout from "../layout/MainLayout.jsx";
import { getMovieByTitle, getNowPlaying, getMoviesGenres, getMovieByGenre } from "../services/api/movie.js";
import useFetchData from "../hooks/useFetchData.jsx";
import CardGrid from '../componenten/CardGrid.jsx'
import useQueryParams from "../hooks/useQueryParams.jsx"
import useDebounce from "../hooks/useDebounce.jsx";
import Error from "../componenten/displays/Error.jsx";
import Loading from "../componenten/displays/Loading.jsx";
import EmptyState from "../componenten/displays/EmptyState.jsx";
import FilterBox from "../componenten/filters/FilterBox.jsx";
import { useState } from "react";
import Pagination from "../componenten/pagination/Pagination.jsx";
import Container from "../componenten/container.jsx";
export default function Movies(){

    const [selectedGenres, setSelectedGenres] = useState([])

    const {paramValue: pageParam, setSearchParams} = useQueryParams('page');
    const page = pageParam? parseInt(pageParam) : 1;

    const {paramValue: titleParam} = useQueryParams('search');
    const debounceValue = useDebounce(titleParam);

    const {data: genres} = useFetchData(getMoviesGenres);
    
    const {data: movies , error, loading} = useFetchData(
        ()=> {
            if(debounceValue){
                return getMovieByTitle(debounceValue) 
            }

            if(selectedGenres.length > 0){
                const withGenres = selectedGenres.join('|');
                return getMovieByGenre(withGenres,page)
            }
            return getNowPlaying(page)
        }, [debounceValue, selectedGenres, page]);


    return <MainLayout>
        <Container>
            <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr'}}>
                <FilterBox genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
                <div style={{gridColumn: 2}}>
                    {loading && <Loading/>}
                    {error && <Error>{error}</Error>}
                    {!movies || movies.length === 0 ? 
                    <EmptyState>No Movies found?</EmptyState> : 
                    <>
                    <CardGrid movies={movies}/> 
                    <Pagination page={page} setSearchParams={setSearchParams}/>
                    </>}

                </div>
            </div>
        </Container>
    </MainLayout>
}