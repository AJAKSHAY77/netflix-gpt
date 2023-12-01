import { createSlice } from "@reduxjs/toolkit";

const GptsearchSlice = createSlice({
  name: "GptSearch",
  initialState: {
    showGptsearch: false,
    GptMovieResult: null,
    MoviesNames: null
  },
  reducers: {
    ToggleGptSearchView: (state, action) => {
      state.showGptsearch = !state.showGptsearch;
    },
    addGptMovieResult: (state, action) => {
      const { MoviesNames, GptResults } = action.payload;
      state.MoviesNames = MoviesNames;
      state.GptMovieResult = GptResults;
    }
  },
});

export const { ToggleGptSearchView, addGptMovieResult } = GptsearchSlice.actions;
export default GptsearchSlice.reducer;
    