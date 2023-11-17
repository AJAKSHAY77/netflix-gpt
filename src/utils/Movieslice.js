import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
      addnowPlayingMovies: (state, action) => {
          state.nowPlayingMovies = action.payload
    },
  },
});
export const { addnowPlayingMovies } = MovieSlice.actions;
export  default MovieSlice.reducer