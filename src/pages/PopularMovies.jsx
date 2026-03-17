import MainLayout from "../layout/MainLayout.jsx";
import CardGrid from "../componenten/CardGrid.jsx";
import { getPopularMovies } from "../services/api/movie.js";
import useFetchData from "../hooks/useFetchData.jsx";
import Loading from "../componenten/displays/Loading";
import Error from "../componenten/displays/Loading";
import EmptyState from "../componenten/displays/Loading";
import Pagination from "../componenten/pagination/Pagination.jsx";
import useQueryParams from "../hooks/useQueryParams.jsx";
import Container from "../componenten/container.jsx";
export default function PopularMovies(){

    const {paramValue, setSearchParams} = useQueryParams('page');

    const page = paramValue ? parseInt(paramValue) : 1;

    const {data, loading, error} = useFetchData(()=>getPopularMovies(page), [page]);

    if (loading) return <Loading/>;
    if(error) return <Error errorMessage={error.message}/>;
    if(!data || data.length == 0) return <EmptyState>No movies found!</EmptyState>

    return <MainLayout>
        <Container>
            <CardGrid movies={data}/>
            <Pagination page={page} setSearchParams={setSearchParams}/>       
        </Container>

    </MainLayout>
}