import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
  name: "searchQuerySlice",
  initialState: { job: "", location: "" },
  reducers: {
    setState: (state, action) => {
      state.job = action.payload.job;
      state.location = action.payload.location;
    },
  },
});

export const { setState } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
