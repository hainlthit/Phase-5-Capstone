import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/client"

export const fetchVillagers = createAsyncThunk(
  "villagers/fetchVillagers",
  async () => {
    const response = await client.get("https://acnhapi.com/v1a/villagers");
    return response.data;
  }
);

const villagersSlice = createSlice({
  name: "villagers",
  initialState: {
    entities: [], 
    status: "idle", 
  },
  reducers: {

  },
  extraReducers: {
    [fetchVillagers.pending](state) {
      state.status = "loading";
    },
    [fetchVillagers.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});



export default villagersSlice.reducer;
