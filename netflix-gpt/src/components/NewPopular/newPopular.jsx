import { useSelector } from "react-redux";
import MovieList from "../Browse/movieList";
import MovieModel from "../MovieModel/movieModel";
import useFetchCategory from "../../hooks/useFetchCategory";


const NewPopular = () => {
    useFetchCategory("/trending/all/day", "mixed", "trendingToday");
    useFetchCategory("/trending/all/week", "mixed", "trendingWeek");
    useFetchCategory("/discover/tv?with_original_language=ko&with_origin_country=KR", "mixed", "kDramas");
    useFetchCategory("/discover/tv?with_original_language=ja&with_origin_country=JP", "mixed", "japaneseDramas");
    useFetchCategory("/discover/tv?with_original_language=zh&with_origin_country=CN", "mixed", "chineseDramas");

    const { trendingToday, trendingWeek, kDramas, japaneseDramas, chineseDramas } = useSelector(store => store.movies.mixed);
    if (!trendingToday) return null;

    return (
        <div className="bg-black min-h-screen pt-24 md:pt-32 pb-20">
            <div className="relative z-20 px-4 md:px-12 space-y-10">
                <MovieList title={"Trending Today"} movies={trendingToday} mediaType="movie" />
                <MovieList title={"Trending This Week"} movies={trendingWeek} mediaType="movie" />
                <MovieList title={"Korean Dramas"} movies={kDramas} mediaType="tv" />
                <MovieList title={"Japanese Dramas"} movies={japaneseDramas} mediaType="tv" />
                <MovieList title={"Chinese Dramas"} movies={chineseDramas} mediaType="tv" />
                <MovieModel />
            </div>
        </div>
    )
}

export default NewPopular;