import { useRef } from "react";

const useGptSearch = () => {
    const searchText = useRef(null);

    const handleGptSearchClick = (e) => {
        e.preventDefault();
        console.log(searchText.current?.value);
        // Future GPT API integration here
    };

    return {
        searchText,
        handleGptSearchClick,
    };
};

export default useGptSearch;
