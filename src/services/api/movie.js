import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_BEARER_TOKEN}`
    }
})

export async function getUpcomingMovies(page){
    try {
        const response = await api.get(`/movie/upcoming?page=${page}`);
        const data = response.data.results;
        return data;
    } catch (error) {
        console.error(`Failed to get upcomming movies from api: ${error}`);
        return false;
    }
}

export async function getPopularMovies(page){
    try {
        const response = await api.get(`/movie/popular?page=${page}`);
        return response.data.results
    } catch (error) {
        console.error(`Failed to get popular movies from api: ${error}`);
        return false
    }
}

export async function getNowPlaying(page){
    try {
        const response = await api.get(`/movie/now_playing?page=${page}`);
        return response.data.results;
    } catch (error) {
        console.error(`Failed to get now playing movies from api: ${error}`);
        return false;        
    }
}

export async function getTopRated(page){
    try {
        const response = await api.get(`/movie/top_rated?page=${page}`);
        return response.data.results
    } catch (error) {
        console.error(`Failed to get top rated movies from api: ${error}`);
        return false
    }
}

export async function getMovieDetails(id){
    try {
        const response = await api.get(`/movie/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to get movie details from api: ${error}`);
        return false
    }
}

export async function getMovieByTitle(title){
    try {
        const response = await api.get(`/search/movie?query=${title}`);
        return response.data.results;
    } catch (error) {
        console.error(`Failed to get search movie by title from api; ${error}`);
        return false
    }
}

export async function getMovieImg(id){
    try {
        const response = await api.get(`/movie/${id}/images`);
        return response.data;
    } catch (error) {
        console.error(`Failed to get img from movie: ${error}`);
        return false;
    };
}

export async function getSimilarMovies(id){
    try {
        const response = await api.get(`/movie/${id}/similar`);
        return response.data.results;
    } catch (error) {
        console.error(`Failed to get similar movies: ${error}`);
        return false;
    }
}

export async function getMoviesGenres(){
    try {
        const response = await api.get('/genre/movie/list');
        return response.data
    } catch (error) {
        console.error(`Failed to get movies genres: ${error}`);
        return false;
    }
}

export async function getMovieByGenre(genres,page){
    try {
        const response = await api.get(`/discover/movie?with_genres=${genres}&page=${page}`);
        return response.data.results;
    } catch (error) {
        console.error(`Failed to get movie by genre: ${error}`);
        return false;
    }
}