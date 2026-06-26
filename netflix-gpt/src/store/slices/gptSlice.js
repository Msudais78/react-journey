import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
    name: 'gptSearch',
    initialState: {
        showGptSearch: false,
        searchResultMovies: [],
        tmdbMovies: [],
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addSearchResultMovies: (state, action) => {
            state.searchResultMovies = action.payload;
        },
        addTmdbMovies: (state, action) => {
            state.tmdbMovies = action.payload;
        }
    }
});

export const { toggleGptSearch, addSearchResultMovies, addTmdbMovies } = gptSearch.actions;
export default gptSearch.reducer;
export const showGptSearch = (state) => state.gptSearch.showGptSearch;
