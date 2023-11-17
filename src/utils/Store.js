import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import Movieslice from "./Movieslice";

const Store = configureStore(
    {
        reducer: {
            user: UserSlice,
            movies:Movieslice
        }
    }
)

export default Store;