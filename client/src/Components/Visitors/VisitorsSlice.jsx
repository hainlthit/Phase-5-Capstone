import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchVisitors = createAsyncThunk(
  "visitors/fetchVisitors",
  async () => {
    return fetch("/visitors")
    .then((res) => res.json());
  }
);

// export const deleteComment = createAsyncThunk(
//   "comments/deleteComment",
//   async (commentId) => {
//     fetch(`/comments/${commentId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return commentId;
//   }
// );

export const createVisitor = createAsyncThunk(
  "visitors/createVisitor",
  async (newIslandObj) => {
    return fetch(`/visitors`, {
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
    // [deleteComment.fulfilled](state, action) {
    //   state.entities = state.entities.filter(
    //     (comment) => comment.id !== action.payload
    //   );
    // },
    [createVisitor.fulfilled](state, action) {
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

export default visitorsSlice.reducer;