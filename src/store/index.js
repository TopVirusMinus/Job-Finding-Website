import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";

const store = configureStore({ reducer: { jobSlice } });
export default store;
