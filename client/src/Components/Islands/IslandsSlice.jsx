import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchIslands = createAsyncThunk(
  "islands/fetchIslands",
  async () => {
    return fetch("/islands").then((res) => res.json());
  }
);

export const deleteIsland = createAsyncThunk(
  "islands/deleteIslands",
  async (currentIslandId) => {
    fetch(`/islands/${currentIslandId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return currentIslandId;
  }
);

export const createIsland = createAsyncThunk(
  "islands/createIsland",
  async (newIslandObj) => {
    return fetch(`/islands`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIslandObj),
    }).then((res) => res.json());
  }
);

// export const updateComment = createAsyncThunk(
//   "comments/updateComment",
//   async (updateComment) => {
//     return fetch(`/comments/${updateComment['id']}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updateComment),
//     }).then((res) => res.json());
//   }
// );

const islandsSlice = createSlice({
  name: "islands",
  initialState: {
    entities: [],
  },
  reducers: {},
  extraReducers: {
    [fetchIslands.fulfilled]: (state, action) => {
      return action.payload;
    },
    // [deleteComment.fulfilled](state, action) {
    //   state.entities = state.entities.filter(
    //     (comment) => comment.id !== action.payload
    //   );
    // },

    [deleteIsland.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [createIsland.fulfilled](state, action) {
      state.entities = [...state.entities, action.payload];
    },
    // [updateComment.fulfilled](state, action) {
    //   state.entities = state.entities.filter(
    //     (comment) => comment.id !== action.payload['id']
    //   )
    //   state.entities = [...state.entities, action.payload];
    // },
  },
});

export default islandsSlice.reducer;
