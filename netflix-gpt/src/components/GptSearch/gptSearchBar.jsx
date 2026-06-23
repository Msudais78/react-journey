import useGptSearch from "./useGptSearch";

const GptSearchBar = () => {
    const { searchText, handleGptSearchClick } = useGptSearch();

    return (
        <div className="flex justify-center pt-24"> 
            <form onSubmit={handleGptSearchClick} className="w-1/2">
                <input ref={searchText} type="text" className="w-1/2 p-2 rounded-l text-black" placeholder="What would you like to watch today?"/>
                <button type="submit" className="bg-blue-500 text-white rounded-r p-2 font-bold hover:bg-blue-600 transition">Search</button>
            </form>
        </div>
    );
};

export default GptSearchBar;