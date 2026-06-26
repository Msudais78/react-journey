import GptSearchBar from "./gptSearchBar"
import GptMovieSuggestions from "./gptMovieSuggestions"

const GptSearch = () => {
    return (
        <div className="flex justify-center min-h-screen bg-black pt-24 md:pt-32">
            <div className="w-full">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </div>
    )
}

export default GptSearch