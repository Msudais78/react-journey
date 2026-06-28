import { useSelector } from "react-redux";
import MovieList from "../Browse/movieList";
import MovieModel from "../MovieModel/movieModel";
import useFetchCategory from "../../hooks/useFetchCategory";



const Movies = () => {
    useFetchCategory("/movie/now_playing?page=2", "movies", "nowPlaying");
    useFetchCategory("/movie/top_rated?page=2", "movies", "topRated");
    useFetchCategory("/movie/upcoming?page=2", "movies", "upcomingReleases");
    useFetchCategory("/discover/movie?with_genres=28", "movies", "actionMovies");
    useFetchCategory("/discover/movie?with_genres=12", "movies", "blockbusterMovies");
    useFetchCategory("/trending/movie/week", "movies", "trendingThisWeek");

    const { nowPlaying, topRated, upcomingReleases, actionMovies, blockbusterMovies, trendingThisWeek } = useSelector(store => store.movies.movies);
    if (!topRated) return null;

    return (
        <div className="bg-black min-h-screen pt-24 md:pt-32 pb-20">
            <div className="relative z-20 px-4 md:px-12 space-y-10">
                <MovieList title={"Now Playing"} movies={nowPlaying} mediaType="movie" />
                <MovieList title={"Top Rated"} movies={topRated} mediaType="movie" />
                <MovieList title={"Upcoming Releases"} movies={upcomingReleases} mediaType="movie" />
                <MovieList title={"Action Movies"} movies={actionMovies} mediaType="movie" />
                <MovieList title={"Blockbuster Movies"} movies={blockbusterMovies} mediaType="movie" />
                <MovieList title={"Trending This Week"} movies={trendingThisWeek} mediaType="movie" />
                <MovieModel />
            </div>
        </div>
    )
}

export default Movies;