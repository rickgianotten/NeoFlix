import MainLayout from "../layout/MainLayout";
import CardGrid from "../componenten/CardGrid";
import EmptyState from "../componenten/displays/EmptyState";
import Error from "../componenten/displays/Error";
import Loading from "../componenten/displays/Loading";
import useStoredMovies from "../hooks/useStoredMovies";
import Container from "../componenten/container";

export default function MyList(){

    const {data: movies, loading, error} = useStoredMovies();

    return <MainLayout>
        {loading && <Loading/>}
        {error && <Error>{error}</Error>}
        {!movies || movies.length === 0 ? <EmptyState>No movies in your list!</EmptyState> : 
        <Container>
        <   CardGrid movies={movies}/>
        </Container>
        } 
    </MainLayout>
}