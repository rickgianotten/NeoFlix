import MainLayout from '../layout/MainLayout';
import useFetchData from "../hooks/useFetchData";
import useQueryParams from '../hooks/useQueryParams';
import CardGrid from "../componenten/CardGrid";
import Pagination from "../componenten/pagination/Pagination"
import { getTopRated } from '../services/api/movie';
import Error from "../componenten/displays/Error";
import Loading from "../componenten/displays/Loading";
import EmptyState from "../componenten/displays/EmptyState";
import Container from '../componenten/container';
export default function TopRatedMovies(){
    const {paramValue, setSearchParams} = useQueryParams('page');

    const page = paramValue ? parseInt(paramValue) : 1

    const {data: movies, error, loading} = useFetchData(()=> getTopRated(page), [page]);

    return <MainLayout>
        {loading && <Loading/>}
        {error && <Error/>}
        {!movies || movies.length == 0 ?
        <EmptyState/> :
        <Container>
            <CardGrid movies={movies}/>
            <Pagination page={page} setSearchParams={setSearchParams}/>
        </Container>
        }
    </MainLayout>
}