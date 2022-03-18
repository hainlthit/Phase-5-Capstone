import { configureStore } from "@reduxjs/toolkit";

import villagerReducer from "../Villagers/villagersSlice";
import newVillagersReducer from "../Villagers/newVillagersSlice";

const store = configureStore({
  reducer: {
    villagers: villagerReducer,
    newVillagers: newVillagersReducer,
  },
});

export default store;