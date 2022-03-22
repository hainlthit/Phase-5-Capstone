import { configureStore } from "@reduxjs/toolkit";

import villagerReducer from "../Villagers/villagersSlice";
import newVillagersReducer from "../Villagers/newVillagersSlice";
import islandsReducer from "../Islands/IslandsSlice"
import visitorsReducer from "../Visitors/VisitorsSlice"

const store = configureStore({
  reducer: {
    villagers: villagerReducer,
    newVillagers: newVillagersReducer,
    islands: islandsReducer,
    visitors: visitorsReducer,
  },
});

export default store;