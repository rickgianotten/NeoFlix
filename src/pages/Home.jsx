import MainLayout from "../layout/MainLayout.jsx";
import Carousel from "../componenten/carousel/Carousel.jsx";
import FeatureSection from "../componenten/FeatureSection.jsx"
import { getUpcomingMovies, getPopularMovies, getNowPlaying } from "../services/api/movie.js";
import useFetchData from "../hooks/useFetchData.jsx";
import CarouselSlide from "../componenten/carousel/CarouselSlide.jsx";
import MovieBackdrop from '../componenten/media/MovieBackdrop.jsx'
import MovieInfo from "../componenten/media/MovieInfo.jsx";

export default function Home(){

  const {data, loading, error} = useFetchData(()=>getNowPlaying(1))

  const movies = data.slice(0,6);

  return <MainLayout>
    
    <section className="hero" style={{paddingTop: "15px"}}>
      <Carousel>
        {movies.map((movie) =>{
          return <CarouselSlide key={movie.id}>
            <div style={{width: '500px'}}>
              <MovieBackdrop movie={movie}/>
            </div>

            <MovieInfo movie={movie}/>
          </CarouselSlide>})}
      </Carousel>
    </section>

    <FeatureSection title=" 📈 Upcomming Movies" href="/upcomming" apiFunction={()=>getUpcomingMovies(1)}/>
    <FeatureSection title=" 🔥 Popular Movies" href="/popular" apiFunction={()=>getPopularMovies(1)}/>

  </MainLayout>
}