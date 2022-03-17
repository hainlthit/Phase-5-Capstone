import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchVillagers = createAsyncThunk(
  "villagers/fetchVillagers",
  () => {
    return fetch("https://acnhapi.com/v1a/villagers")
      .then((response) => response.json())
      .then((data) => data);
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
