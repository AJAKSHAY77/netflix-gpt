import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addtrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addnowPlayingMovies, addtrailerVideo } = MovieSlice.actions;
export  default MovieSlice.reducer