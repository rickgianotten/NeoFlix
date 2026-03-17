import {useState, useEffect} from 'react'

export default function useMovies(){

    const [storedMovies, setStoredMovies] = useState(()=>{
        const savedMovies = localStorage.getItem('storedMovies');
        return savedMovies ? JSON.parse(savedMovies) : [];
    });

    useEffect(()=>{
        localStorage.setItem('storedMovies', JSON.stringify(storedMovies));
    },[storedMovies]);

    function storeMovie(movieId){
        setStoredMovies(prev =>{
            if(prev.includes(movieId)){
                return prev.filter((id) => movieId != id);
            }else{
                return [...prev, movieId];
            }            
        });
    };

    function isStored(id){
        return storedMovies.includes(id);
    };

    return {storedMovies,storeMovie, isStored }
}