import MainLayout from "../layout/MainLayout";
import useFetchData from "../hooks/useFetchData";
import { getUpcomingMovies } from "../services/api/movie";
import CardGrid from "../componenten/CardGrid";
import Pagination from "../componenten/pagination/Pagination";
import useQueryParams from "../hooks/useQueryParams";
import Loading from '../componenten/displays/Loading';
import Error from '../componenten/displays/Error';
import EmptyState from '../componenten/displays/EmptyState';
import Container from "../componenten/container";
export default function Upcomming(){

    const {paramValue, setSearchParams} = useQueryParams('page');

    const page = paramValue ? parseInt(paramValue) : 1

    const {data: movies, loading, error} = useFetchData(()=>getUpcomingMovies(page), [page])

    return <MainLayout>
        {loading && <Loading/>}
        {error && <Error>{error}</Error>}
        {!movies || movies.length === 0 ? 
        <EmptyState>No Movies found?</EmptyState> : 
        <Container>
            <CardGrid movies={movies}/>
            <Pagination page={page} setSearchParams={setSearchParams}/>
        </Container>
        }   
    </MainLayout>
}