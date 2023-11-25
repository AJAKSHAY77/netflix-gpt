import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import Movieslice from "./Movieslice";
import GptSearchSlice from "./GptSearchSlice";
import ConfigSlice from "./ConFigSlice"

const Store = configureStore({
  reducer: {
    user: UserSlice,
    movies: Movieslice,
    GptSearch: GptSearchSlice,
    config: ConfigSlice,
  },
});

export default Store;