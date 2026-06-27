import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
    name: 'gptSearch',
    initialState: {
        showGptSearch: false,
        searchResultMovies: [],
        tmdbMovies: [],
        isModalOpen: false,
        trailerVideoDetails: null,
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
        },
        openModal: (state, action)=>{
            state.isModalOpen = true;
            state.trailerVideoDetails = action.payload;
        },
        closeModal: (state)=>{
            state.isModalOpen = false;
            state.trailerVideoDetails = null;
        }
    }
});

export const { toggleGptSearch, addSearchResultMovies, addTmdbMovies, openModal, closeModal } = gptSearch.actions;
export default gptSearch.reducer;
export const showGptSearch = (state) => state.gptSearch.showGptSearch;
