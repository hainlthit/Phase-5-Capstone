import { configureStore } from "@reduxjs/toolkit";

import villagersReducer from "../Villagers/villagersSlice";
import newVillagersReducer from "../Villagers/newVillagersSlice";

const store = configureStore({
  reducer: {
    villagers: villagersReducer,
    newVillagers: newVillagersReducer,
  },
});

export default store;