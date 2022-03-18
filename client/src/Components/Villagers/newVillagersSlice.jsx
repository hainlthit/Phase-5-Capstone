import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/client"

export const fetchNewVillagers = createAsyncThunk(
  "newVillagers/fetchNewVillagers",
  async () => {
    const response = await client.get("/villagers");
    return response.data;
  }
);

export const addNewVillagers = createAsyncThunk(
  "newVillagers/addNewVillagers",
  async (initialPost) => {
    const response = await client.post("/villagers", initialPost);
    return response.data;
  }
);

const newVillagersSlice = createSlice({
  name: "newVillagers",
  initialState: {
    entities: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchNewVillagers.pending](state) {
      state.status = "loading";
    },
    [fetchNewVillagers.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    
  },
});
export const { newVillagerAdded } = newVillagersSlice.actions;

export default newVillagersSlice.reducer;
