import { useRef } from "react";
import { GoogleGenerativeAI, GoogleGenerativeAIAbortError } from "@google/generative-ai";

const useGptSearch = () => {
    const searchText = useRef(null);
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const handleGptSearchClick = (e) => {
        e.preventDefault();
        handleGptMovieSearch();
    };

    const handleGptMovieSearch = async () => {
        const prompt = "Act as a movie recommendation system. Suggest 10 movies based on the following search query: " + searchText.current?.value + ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya make sure you give response only like this and never answer anything beyond";
        try {
            const result = await model.generateContent(prompt);
            const text = result.response.text();
            const MoviesArray = text.split(',');
            console.log(MoviesArray);
        } catch (error) {
            if (error instanceof GoogleGenerativeAIAbortError) {
                console.log("Search cancelled.");
            } else {
                console.error("Error generating content:", error);
            }
        }
    };
    return {
        searchText,
        handleGptSearchClick,
    };
};

export default useGptSearch;
