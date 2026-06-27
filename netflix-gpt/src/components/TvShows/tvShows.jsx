import { useSelector } from "react-redux";
import usePopularTvShows from "../../hooks/usePopularTvShows";
import MovieList from "../Browse/MovieList";
import MovieModel from "../MovieModel/movieModel";

const TvShows = () => {
    usePopularTvShows();

    const popularTvShows = useSelector(store => store.movies.popularTvShows);

    if (!popularTvShows) return null;

    return (
        <div>
            <MovieList title={"Popular Tv Shows"} movies={popularTvShows} mediaType="tv" />
            <MovieModel />
        </div>
    )
}

export default TvShows;