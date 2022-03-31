import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchVisitors = createAsyncThunk(
  "visitors/fetchVisitors",
  async () => {
    return fetch("/visitors").then((res) => res.json());
  }
);

export const deleteVisitor = createAsyncThunk(
  "visitors/deleteVisitor",
  async (currentVisitorId) => {
    fetch(`/visitors/${currentVisitorId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return currentVisitorId;
  }
);

export const createVisitor = createAsyncThunk(
  "visitors/createVisitor",
  async (island_id, villager_id) => {
    return fetch("/visitors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(island_id, villager_id),
    }).then((res) => res.json());
  }
);

const visitorsSlice = createSlice({
  name: "visitors",
  initialState: {
    entities: [],
  },
  reducers: {},
  extraReducers: {
    [fetchVisitors.fulfilled](state, action) {
      state.entities = action.payload;
    },
    [deleteVisitor.fulfilled]: (state, action) => {
      let index = state.entities.findIndex(({ id }) => id === action.payload.id);
      state.entities.splice(index, 1);
    },
    [createVisitor.fulfilled](state, action) {
      state.entities = [...state.entities, action.payload];
    },
  },
});

export default visitorsSlice.reducer;
