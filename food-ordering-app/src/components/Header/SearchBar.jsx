import React from "react";

const SearchBar = () => {
    return (
        <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-6 h-6 text-gray-400 group-focus-within:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input 
                type="text" 
                placeholder="Search for food, restaurants..." 
                className="block w-full pl-12 pr-28 py-3 text-base text-gray-700 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all shadow-inner placeholder-gray-400"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-1">
                <button type="submit" className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-colors shadow-sm">
                    SEARCH
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
