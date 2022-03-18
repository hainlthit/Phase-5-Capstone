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

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { client } from "../../api/client"

// export const fetchVillagers = createAsyncThunk(
//   "villagers/fetchVillagers",
//   async () => {
//     const response = await client.get("https://acnhapi.com/v1a/villagers");
//     return response.data;
//   }
// );

// const villagersSlice = createSlice({
//   name: "villagers",
//   initialState: {
//     entities: [],
//     status: "idle",
//   },
//   reducers: {

//   },
//   extraReducers: {
//     [fetchVillagers.pending](state) {
//       state.status = "loading";
//     },
//     [fetchVillagers.fulfilled](state, action) {
//       state.entities = action.payload;
//       state.status = "idle";
//     },
//   },
// });

// export default villagersSlice.reducer;
