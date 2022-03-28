import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVillagers = createAsyncThunk(
  "villagers/fetchVillagers",
  async () => {
    return fetch("https://acnhapi.com/v1a/villagers").then((res) => res.json());
  }
);

const villagersSlice = createSlice({
  name: "villagers",
  initialState: {
    entities: [],
  },
  extraReducers: {
    [fetchVillagers.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

export default villagersSlice.reducer;
