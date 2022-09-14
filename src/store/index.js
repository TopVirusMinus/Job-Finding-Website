import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";
import searchQuerySlice from "./searchQuerySlice";

const store = configureStore({ reducer: { jobSlice, searchQuerySlice } });
export default store;
