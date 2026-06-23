import GptSearchBar from "./gptSearchBar"
import GptMovieSuggestions from "./gptMovieSuggestions"

const GptSearch = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black"> 
            <div>
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </div>
    )
}

export default GptSearch