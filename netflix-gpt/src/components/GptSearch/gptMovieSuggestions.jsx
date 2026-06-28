import { useSelector } from "react-redux";
import MovieList from "../Browse/MovieList";

const GptMovieSuggestions = () => {
    const searchResultMovies = useSelector((state) => state.gptSearch.searchResultMovies);
    const tmdbMovies = useSelector((state) => state.gptSearch.tmdbMovies);

    // If there is no data, don't render anything
    if (!searchResultMovies || searchResultMovies.length === 0 || !tmdbMovies) return null;

    return (
        // Added flex-col and gap-10 to space out the rows, and glassmorphism for a modern look
        <div className="p-6 md:p-10 m-4 mt-12 bg-black text-white rounded-3xl backdrop-blur-lg border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col gap-8 md:gap-12 transition-all duration-500">

            {searchResultMovies.map((movie, index) => (
                <MovieList
                    key={movie}
                    title={movie}
                    movies={tmdbMovies[index]}
                />
            ))}

        </div>
    );
}

export default GptMovieSuggestions;