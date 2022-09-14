import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
  name: "searchQuerySlice",
  initialState: { job: "", Location: "", category: "" },
  reducers: {},
});

export const {} = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
