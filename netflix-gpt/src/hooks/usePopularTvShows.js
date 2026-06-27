import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularTvShows } from "../store/slices/moviesSlice";

const usePopularTvShows = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        fetch('https://api.themoviedb.org/3/tv/popular?page=1', API_OPTIONS)
            .then(res => res.json())
            .then(data => dispatch(addPopularTvShows(data.results)))

    }, [])


}

export default usePopularTvShows;