import { createSlice } from "@reduxjs/toolkit";

const GptsearchSlice = createSlice({
  name: "GptSearch",
  initialState: {
    showGptsearch: false,
  },
  reducers: {
    ToggleGptSearchView: (state, action) => {
      state.showGptsearch = !state.showGptsearch;
    },
  },
});

export const { ToggleGptSearchView } = GptsearchSlice.actions;
export default GptsearchSlice.reducer;
    