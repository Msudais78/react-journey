import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/slices/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const url = "https://api.themoviedb.org/3/discover/movie?with_genres=16&with_original_language=ja";
        fetch(url, API_OPTIONS)
            .then(res => res.json())
            .then(data => dispatch(addNowPlayingMovies(data.results)));
    }, []);
}

export default useNowPlayingMovies;