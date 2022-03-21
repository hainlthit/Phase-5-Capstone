import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newVillagerDataService from "../../services/newVillagerServices";

const initialState = {
  entities: [],
};

export const addNewVillagers = createAsyncThunk(
  "newVillager/create",
  async (newVillagerObj) => {
    const res = await newVillagerDataService.create(newVillagerObj);
    return res.data;
  }
);

export const fetchNewVillagers = createAsyncThunk(
  "newVillagers/fetchData",
  async () => {
    const res = await newVillagerDataService.getAll();
    return res.data;
  }
);

// export const updateVillagers = createAsyncThunk(
//   "newVillagers/newVillagerUpdate",
//   async ({ id, data }) => {
//     const res = await newVillagerDataService.update(id, data);
//     return res.data;
//   }
// );

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
  "newVillagers/newVillagerDeleted",
  async ({ villagerId }) => {
    await newVillagerDataService.remove(villagerId);
    return villagerId;
  }
);

// export const deleteNewVillager = createAsyncThunk(
//   "newVillagers/deleteNewVillager",
//   async (currentVillagerId) => {
//     fetch(`/villagers/${currentVillagerId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return currentVillagerId;
//   }
// );

// export const deleteAllTutorials = createAsyncThunk(
//   "tutorials/deleteAll",
//   async () => {
//     const res = await TutorialDataService.removeAll();
//     return res.data;
//   }
// );

// export const findTutorialsByTitle = createAsyncThunk(
//   "tutorials/findByTitle",
//   async ({ title }) => {
//     const res = await TutorialDataService.findByTitle(title);
//     return res.data;
//   }
// );

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
    [updateNewVillagers.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (villager) => villager.id === action.payload.id
      );
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteNewVillager.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },

    // [updateNewVillagers.fulfilled](state, action) {
    //   state = state.filter(
    //     (villager) => villager.id !== action.payload["id"]
    //   );
    //   state = [...state, action.payload];
    // },
    // [deleteAllTutorials.fulfilled]: (state, action) => {
    //   return [];
    // },
    // [findTutorialsByTitle.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
  },
});

export default newVillagersSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { client } from "../../api/client"

// export const fetchNewVillagers = createAsyncThunk(
//   "newVillagers/fetchNewVillagers",
//   async () => {
//     const response = await client.get("/villagers");
//     return response.data;
//   }
// );

// export const addNewVillagers = createAsyncThunk(
//   "newVillagers/addNewVillagers",
//   async (initialNewVillagers) => {
//     const response = await client.post("/villagers", initialNewVillagers);
//     return response.data;
//   }
// );

// const newVillagersSlice = createSlice({
//   name: "newVillagers",
//   initialState: {
//     entities: [],
//     status: "idle",
//   },
//   reducers: {},
//   extraReducers: {
//     // handle async actions: pending, fulfilled, rejected (for errors)
//     [fetchNewVillagers.pending](state) {
//       state.status = "loading";
//     },
//     [fetchNewVillagers.fulfilled](state, action) {
//       state.entities = action.payload;
//       state.status = "idle";
//     },

//   },
// });
// export const { newVillagerRemoved } = newVillagersSlice.actions;

// export default newVillagersSlice.reducer;
