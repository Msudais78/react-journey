import { useSelector } from "react-redux";
import useFetchCategory from "../../hooks/useFetchCategory";
import { showGptSearch } from "../../store/slices/gptSlice";

const useBrowse = () => {
    useFetchCategory("/discover/movie?with_genres=16&with_original_language=ja", "mainPage", "nowPlayingMovies");
    useFetchCategory("/movie/popular", "mainPage", "popularMovies");
    useFetchCategory("/movie/top_rated", "mainPage", "topRatedMovies");
    useFetchCategory("/movie/upcoming", "mainPage", "upcomingMovies");

    const isGptSearchVisible = useSelector(showGptSearch);
    const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } = useSelector(state => state.movies.mainPage);

    return {
        nowPlayingMovies,
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        isGptSearchVisible,
    };
};

export default useBrowse;
