import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
    name: 'gptSearch',
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
});

export const { toggleGptSearch } = gptSearch.actions;
export default gptSearch.reducer;
export const showGptSearch = (state) => state.gptSearch.showGptSearch;