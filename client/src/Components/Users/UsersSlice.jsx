import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return fetch("/users").then((res) => res.json());
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
  },
  reducers: {
    logout: (state, action) => {
      if (action.type === "users/logout") state.users = undefined;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled](state, action) {
      state.entities = action.payload;
    },
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;
