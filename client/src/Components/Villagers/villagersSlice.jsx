import {
  RETRIEVE_VILLAGERS
} from "../actions/types";

const initialState = [];

function villagerReducer(villagers = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_VILLAGERS:
      return payload;

    default:
      return villagers;
  }
};

export default villagerReducer;

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
