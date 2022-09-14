import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getJobs = createAsyncThunk(
  "jobSlice/getJobs",
  async (_, { rejectWithValue, dispatch }) => {
    const url =
      "https://6251492bdfa31c1fbd6bcc26.mockapi.io/jobs?fbclid=IwAR2evHHlm3KNAy8rpRqgnvbt238yMhuuvMRR4skEJ19VJWldsJBmuQl1tOY";

    const options = {
      method: "GET",
      url,
    };

    try {
      const response = await axios.request(options);
      dispatch(increaseJobs(4));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const jobSlice = createSlice({
  name: "jobSlice",
  initialState: { jobs: [], isLoading: true, isError: false, showJobs: 0 },
  reducers: {
    increaseJobs: (state, action) => {
      if (state.showJobs + action.payload <= state.jobs.length) {
        state.showJobs += action.payload;
      }
    },
  },
  extraReducers: {
    [getJobs.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getJobs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.jobs = action.payload;
    },
    [getJobs.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error(action.payload);
    },
  },
});

export const { increaseJobs } = jobSlice.actions;
export default jobSlice.reducer;
