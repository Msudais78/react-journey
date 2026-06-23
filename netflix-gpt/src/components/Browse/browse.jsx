import Header from "../common/Header";
import MainContainer  from "./mainContainer";
import SecondryContainer from "./secondryContainer";
import GptSearch from "../GptSearch/gptSearch";
import useBrowse from "./useBrowse";

const Browse = () => {
    const { movies, isGptSearchVisible } = useBrowse();

    if (!movies || movies.length === 0) return <h1>Loading</h1>;

    const mainMovie = movies[7];
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
        </div>
    );
};

export default Browse;