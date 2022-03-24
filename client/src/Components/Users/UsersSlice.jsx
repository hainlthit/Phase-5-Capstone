import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return fetch("/users").then((res) => res.json());
});

// export const deleteVisitor = createAsyncThunk(
//   "visitors/deleteVisitor",
//   async (visitorID) => {
//     fetch(`/comments/${visitorID}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return visitorID;
//   }
// );

// export const createVisitor = createAsyncThunk(
//   "visitors/createVisitor",
//   async (island_id, villager_id) => {
//     return fetch("/visitors", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(island_id, villager_id),
//     }).then((res) => res.json());
//   }
// );

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

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
  },
  reducers: {
    logout: (state) => {
      // From here we can take action only at this "counter" state
      // But, as we have taken care of this particular "logout" action
      // in rootReducer, we can use it to CLEAR the complete Redux Store's state
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled](state, action) {
      state.entities = action.payload;
    },
    // [deleteVisitor.fulfilled](state, action) {
    //   state.entities = state.entities.filter(
    //     (visitor) => visitor.id !== action.payload
    //   );
    // },
    // [createVisitor.fulfilled](state, action) {
    //   state.entities = [...state.entities, action.payload];
    // },
    // [updateComment.fulfilled](state, action) {
    //   state.entities = state.entities.filter(
    //     (comment) => comment.id !== action.payload['id']
    //   )
    //   state.entities = [...state.entities, action.payload];
    // },
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;
