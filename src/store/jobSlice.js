import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getJobs = createAsyncThunk(
  "jobSlice/getJobs",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    const url =
      "https://6251492bdfa31c1fbd6bcc26.mockapi.io/jobs?fbclid=IwAR2evHHlm3KNAy8rpRqgnvbt238yMhuuvMRR4skEJ19VJWldsJBmuQl1tOY";

    const options = {
      method: "GET",
      url,
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const jobSlice = createSlice({
  name: "jobSlice",
  initialState: { jobs: [], isLoading: true, isError: false },
  reducer: {},
  extraReducers: {
    [getJobs.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getJobs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      console.log(action, "ACTION");
      state.jobs = action.payload;
    },
    [getJobs.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error(action.payload);
    },
  },
});

export default jobSlice.reducer;
