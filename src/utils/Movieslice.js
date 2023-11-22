import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
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
    }
  },
});
export const { addnowPlayingMovies, addtrailerVideo, addpopularMovies } =
  MovieSlice.actions;
export  default MovieSlice.reducer