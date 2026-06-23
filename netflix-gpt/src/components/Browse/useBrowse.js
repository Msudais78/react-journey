import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import { showGptSearch } from "../../store/slices/gptSlice";

const useBrowse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const movies = useSelector(state => state.movies.nowPlayingMovies);
    const isGptSearchVisible = useSelector(showGptSearch);

    return {
        movies,
        isGptSearchVisible,
    };
};

export default useBrowse;
