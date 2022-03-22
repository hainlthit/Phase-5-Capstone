import { configureStore } from "@reduxjs/toolkit";

import villagerReducer from "../Villagers/villagersSlice";
import newVillagersReducer from "../Villagers/newVillagersSlice";
import islandsReducer from "../Islands/IslandsSlice"

const store = configureStore({
  reducer: {
    villagers: villagerReducer,
    newVillagers: newVillagersReducer,
    islands: islandsReducer,
  },
});

export default store;