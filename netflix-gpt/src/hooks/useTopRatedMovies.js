import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/slices/moviesSlice";
import { useEffect } from "react";


const useTopRatedMovies = () => {
const dispatch = useDispatch();

 useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?page=1';
    
        fetch(url, API_OPTIONS)
            .then(res => res.json())
            .then(data => dispatch(addTopRatedMovies(data.results)));
    }, []);
}

export default useTopRatedMovies;