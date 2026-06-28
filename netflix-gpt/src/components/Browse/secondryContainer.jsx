import MovieList from "./movieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {

    const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } = useSelector(store => store.movies.mainPage);

    if (!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingMovies) return null;

    return (
        <div className="bg-neutral-950 text-white pb-12 pt-30" >
            <div className="relative z-40 -mt-12 md:-mt-24 lg:-mt-48 pl-4 md:pl-12">
                <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
                <MovieList title={"Popular Movies"} movies={popularMovies} />
                <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
                <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
            </div>
        </div>
    );
};

export default SecondryContainer;