import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topratedMovies: null
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addtrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addpopularMovies: (state,action) => {
      state.popularMovies = action.payload
    },
    addtopratedMovies: (state,action) => {
      state.topratedMovies = action.payload;
    }
  },
});
export const {
  addnowPlayingMovies,
  addtrailerVideo,
  addpopularMovies,
  addtopratedMovies,
} = MovieSlice.actions;
export  default MovieSlice.reducer