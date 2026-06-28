import Header from "../common/Header";
import MainContainer  from "./mainContainer";
import SecondryContainer from "./secondryContainer";
import GptSearch from "../GptSearch/gptSearch";
import useBrowse from "./useBrowse";
import MovieModel from "../MovieModel/movieModel";

const Browse = () => {
    const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies, isGptSearchVisible } = useBrowse();

    if (!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingMovies) return <h1>Loading</h1>;

    const mainMovie = nowPlayingMovies[7];
    const {original_title, overview, id} = mainMovie;

    return (
        <div className="min-h-screen bg-black">
            <Header />
            {isGptSearchVisible ? <GptSearch /> : (
                <>
                <MainContainer 
                    original_title={original_title}
                    id={id}
                    overview={overview} 
                />
                <SecondryContainer />
                </>
            )}
            <MovieModel />
        </div>
    );
};

export default Browse;