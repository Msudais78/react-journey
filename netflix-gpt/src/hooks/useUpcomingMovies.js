import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {
const dispatch = useDispatch();

 useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?page=1';
    
        fetch(url, API_OPTIONS)
            .then(res => res.json())
            .then(data => dispatch(addUpcomingMovies(data.results)));
    }, []);
}

export default useUpcomingMovies;