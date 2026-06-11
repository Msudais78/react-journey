import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        .then(res => res.json())
        .then(data => dispatch(addPopularMovies(data.results)))
        
    },[])

    
}

export default usePopularMovies;