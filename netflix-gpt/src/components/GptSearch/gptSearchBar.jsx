import { Search } from "lucide-react";
import useGptSearch from "./useGptSearch";

const GptSearchBar = () => {
  const { searchText, handleGptSearchClick, searchError, isLoading } = useGptSearch();

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3">
            Netflix GPT
          </h1>
          <p className="text-gray-400 text-lg">
            Discover movies with AI-powered recommendations
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-3xl p-4 shadow-[0_0_50px_rgba(229,9,20,0.2)]">
          <form
            onSubmit={handleGptSearchClick}
            className="flex flex-col md:flex-row gap-3"
          >
            {/* Input */}
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                ref={searchText}
                type="text"
                placeholder="What would you like to watch today?"
                className="
                  w-full
                  py-4
                  pl-12
                  pr-4
                  bg-gray-900/80
                  border
                  border-gray-700
                  rounded-2xl
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-red-500
                  focus:ring-2
                  focus:ring-red-500/30
                  transition-all
                "
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="
                px-8
                py-4
                bg-red-600
                hover:bg-red-700
                active:scale-95
                text-white
                font-semibold
                rounded-2xl
                transition-all
                duration-200
                shadow-lg
                shadow-red-600/30
                cursor-pointer
                disabled:bg-gray-600
                disabled:cursor-not-allowed   
              "
            >
              {isLoading ? 'Searching...': 'Search'}
            </button>
          </form>

          {/* Error Message */}
          {searchError && (
            <div className="mt-4 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3">
              <p className="text-red-400 text-sm">{searchError}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;