import { configureStore } from "@reduxjs/toolkit";

import villagersReducer from "../Villagers/villagersSlice";

const store = configureStore({
  reducer: {
    villagers: villagersReducer,
  },
});

export default store;