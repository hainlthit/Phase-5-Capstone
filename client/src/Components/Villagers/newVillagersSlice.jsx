import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
};

export const addNewVillagers = createAsyncThunk(
  "newVillager/createNewVillager",
  async (newVillagerObj) => {
    return fetch(`/villagers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVillagerObj),
    }).then((res) => res.json());
  }
);

export const fetchNewVillagers = createAsyncThunk(
  "newVillagers/fetchNewVillagers",
  async () => {
    return fetch("/villagers").then((res) => res.json());
  }
);

export const updateNewVillagers = createAsyncThunk(
  "newVillagers/updateNewVillagers",
  async (newVillager) => {
    return fetch(`/villagers/${newVillager.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVillager),
    }).then((res) => res.json());
  }
);

export const deleteNewVillager = createAsyncThunk(
  "newVillagers/deleteNewVillager",
  async (currentVillagerId) => {
    fetch(`/villagers/${currentVillagerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return currentVillagerId;
  }
);

const newVillagersSlice = createSlice({
  name: "newVillagers",
  initialState,
  reducers: {},

  extraReducers: {
    [addNewVillagers.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [fetchNewVillagers.fulfilled]: (state, action) => {
      return [...action.payload];
    },

    [deleteNewVillager.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },

    [updateNewVillagers.fulfilled](state, action) {
      state = state.filter((villager) => villager.id !== action.payload.id);
      state = [...state, action.payload];
    },
  },
});

export default newVillagersSlice.reducer;
