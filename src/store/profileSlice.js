import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getGender } from "gender-detection-from-name";

export const getProfiles = createAsyncThunk(
  "profile/getProfiles",
  async (_, { rejectWithValue }) => {
    const url =
      "https://6251492bdfa31c1fbd6bcc26.mockapi.io/candidates?fbclid=IwAR3VOCp_70ikWk3UYKONtVs3ML3neEhFhXRHHSWs4JrlUJzIfRQdfsuctMA";

    const options = {
      method: "GET",
      url,
    };

    try {
      const response = await axios.request(options);
      response.data.map((r) => {
        r.img =
          r.name.toLowerCase().includes("mrs") ||
          r.name.toLowerCase().includes("miss") ||
          getGender(`${r.name.split(" ")[0]}`, "en") === "female"
            ? `https://xsgames.co/randomusers/assets/avatars/female/${r.id}.jpg`
            : `https://xsgames.co/randomusers/assets/avatars/male/${r.id}.jpg`;
        return true;
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: { profiles: [], error: false, loading: true },
  reducers: {},
  extraReducers: {
    [getProfiles.pending]: (state, action) => {
      state.error = false;
      state.loading = true;
    },
    [getProfiles.fulfilled]: (state, action) => {
      state.error = false;
      state.loading = false;
      state.profiles = action.payload;
    },
    [getProfiles.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
      console.error(action.payload);
    },
  },
});

export default profileSlice.reducer;
