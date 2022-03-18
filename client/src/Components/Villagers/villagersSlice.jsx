import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import VillagerDataService from "../../services/villagerServices";

export const fetchVillagers = createAsyncThunk(
  "villagers/fetchData",
  async () => {
    const res = await VillagerDataService.getAll();
    return res.data;
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

