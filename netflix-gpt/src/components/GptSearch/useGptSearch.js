import { useRef, useState } from "react";
import Groq from "groq-sdk";
import { useDispatch } from 'react-redux';
import { addSearchResultMovies, addTmdbMovies } from "../../store/slices/gptSlice";
import { API_OPTIONS } from "../../utils/constants";


const useGptSearch = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const [searchError, setSearchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const genAI = new Groq({
        apiKey: import.meta.env.VITE_GROQ_KEY,
        dangerouslyAllowBrowser: true
    });


    const handleGptSearchClick = (e) => {
        e.preventDefault();
        const query = searchText.current.value.trim();
        if (!query) {
            setSearchError("Search something")
            return;
        }
        setSearchError(null);
        handleGptMovieSearch(query);
    };

    const handleGptMovieSearch = async (query) => {
        const prompt = `
        Act as a movie recommendation system.
        Suggest exactly 5 movies based on the user's request.
        Only provide the names of the movies as a comma-separated list like the example result.
        Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.
        Make sure you respond only like this and never include text beyond the movie names.`;
        setIsLoading(true);

        try {
            const result = await genAI.chat.completions.create({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: prompt,
                    },
                    {
                        role: "user",
                        content: query,
                    },
                ],
            });
            const text = result.choices[0].message.content;
            const MoviesArray = text.split(',').map((m)=> m.trim());
            dispatch(addSearchResultMovies(MoviesArray));
            const promiseArray = MoviesArray.map((m) => searchMovieTMDB(m));
            const tmdbResult = await Promise.all(promiseArray);
            dispatch(addTmdbMovies(tmdbResult));
        } catch (error) {
            console.error("Error generating content:", error);
        } finally {
            setIsLoading(false);

        }
    };
    return {
        searchText,
        handleGptSearchClick,
        searchError,
        isLoading
    };
};

const searchMovieTMDB = async (movie) => {
    const res = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const data = await res.json();
    return data.results;
}

export default useGptSearch;
