import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNewVillagers = createAsyncThunk(
  "newVillagers/fetchNewVillagers",
  () => {
    return fetch("/villagers")
      .then((response) => response.json())
      .then((data) => data);
  }
);

const newVillagersSlice = createSlice({
  name: "newVillagers",
  initialState: {
    entities: [],
    status: "idle",
  },
  reducers: {
    newVillagerAdded(state, action) {
      state.entities.push(action.payload);
    },
  },
  extraReducers: {
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
