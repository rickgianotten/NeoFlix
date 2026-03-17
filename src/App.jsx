import {Routes, Route} from "react-router-dom";
import { MovieContext } from "./context/movieContext";
import useMovies from "./hooks/useMovies";
import Home from "./pages/Home"
import Movies from "./pages/Movies";
import PopularMovies from "./pages/PopularMovies";
import MyList from "./pages/MyList";
import Upcomming from "./pages/Upcomming";
import MovieDetails from "./pages/MovieDetails";
import TopRatedMovies from "./pages/TopRated";
function App() {

  const {storedMovies, storeMovie, isStored} = useMovies()
  

  return <MovieContext value={{storedMovies, storeMovie,isStored }}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}/>
        <Route path="/popular" element={<PopularMovies/>}/>
        <Route path="/my-list" element={<MyList/>}/>
        <Route path="/upcomming" element={<Upcomming/>}/>
        <Route path="/top-rated" element={<TopRatedMovies/>}/>
    </Routes>
    </MovieContext>
}

export default App
