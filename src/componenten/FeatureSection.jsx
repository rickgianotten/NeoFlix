import useFetchData from "../hooks/useFetchData";
import CardGrid from "./CardGrid";
import Loading from "./displays/Loading";
import Error from "./displays/Error";
import EmptyState from "./displays/EmptyState";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "./container";
import "../assets/css/componenten/featureSection.css";

export default function FeatureSection({title, href = "" ,apiFunction}){
    const {data, loading, error} = useFetchData(()=> apiFunction(),[]);
    
    const movies = data.slice(0, 6);

    return <section style={{marginBottom: "15px", width: '100%'}}>
            <Container>
                <div className="feature-section-header">
                    <h3>{title}</h3>
                    {href && <Link to={href}>see more <FaArrowRightLong/></Link>}
                </div>
                {loading && <Loading/>}
                {error && <Error>{error}</Error>}
                {!data || data.length == 0 ? <EmptyState>No movies found!</EmptyState> : <CardGrid movies={movies}/>}
            </Container>
        </section>
}