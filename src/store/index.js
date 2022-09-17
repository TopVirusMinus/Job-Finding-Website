import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";
import profileSlice from "./profileSlice";
import searchQuerySlice from "./searchQuerySlice";

const store = configureStore({
  reducer: { jobSlice, searchQuerySlice, profileSlice },
});
export default store;
