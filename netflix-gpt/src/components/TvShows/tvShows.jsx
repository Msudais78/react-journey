import { useSelector } from "react-redux";
import MovieList from "../Browse/movieList";
import MovieModel from "../MovieModel/movieModel";
import useFetchCategory from "../../hooks/useFetchCategory";


const TvShows = () => {
    useFetchCategory("/tv/popular", "tv", "popularTv");
    useFetchCategory("/trending/tv/week", "tv", "trendingTv");
    useFetchCategory("/tv/top_rated", "tv", "topRatedTv");
    useFetchCategory("/tv/airing_today", "tv", "airingTodayTv");
    useFetchCategory("/discover/tv?with_genres=10759", "tv", "actionTv");
    useFetchCategory("/discover/tv?with_genres=10765", "tv", "sciFiTv");

    const { popularTv, trendingTv, topRatedTv, actionTv, sciFiTv, airingTodayTv } = useSelector(store => store.movies.tv);
    if (!trendingTv) return null;

    return (
    <div className="bg-black min-h-screen pt-24 md:pt-32 pb-20">
        <div className="relative z-20 px-4 md:px-12 space-y-10">
            <MovieList title={"Trending Tv Shows"} movies={trendingTv} mediaType="tv" />
            <MovieList title={"Popular Tv Shows"} movies={popularTv} mediaType="tv" />
            <MovieList title={"Top Rated Tv Shows"} movies={topRatedTv} mediaType="tv" />
            <MovieList title={"Action Tv Shows"} movies={actionTv} mediaType="tv" />
            <MovieList title={"SciFi Tv Shows"} movies={sciFiTv} mediaType="tv" />
            <MovieList title={"Airing Today Tv Shows"} movies={airingTodayTv} mediaType="tv" />
            <MovieModel />
        </div>
    </div>
);
    
}

export default TvShows;