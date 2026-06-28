import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {

        tv: {
            popularTvShows: null,
            popularTv: null,
            trendingTv: null,
            topRatedTv: null,
            airingTodayTv: null,
            actionTv: null,
            sciFiTv: null,
        },
        mainPage: {
            nowPlayingMovies: null,
            topRatedMovies: null,
            upcomingMovies: null,
            popularMovies: null,
        },
        ui: {
            trailerVideo: null,
        },
        movies: {
            trendingThisWeek: null,
            nowPlaying: null,
            topRated: null,
            upcomingReleases: null,
            actionMovies: null,
            blockbusterMovies: null,
        },
        mixed: {
            trendingToday: null,
            trendingWeek: null,
            kDramas: null,
            japaneseDramas: null,
            chineseDramas: null,

        }
        
    },
    reducers: {
        addMediaReducer: (state, action) => {
            const {domain, category, data} = action.payload;
            state[domain][category] = data;
        }
    }
});

export const { addMediaReducer } = moviesSlice.actions;

export default moviesSlice.reducer;