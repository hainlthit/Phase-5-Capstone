import { configureStore, combineReducers } from "@reduxjs/toolkit";

import villagerReducer from "../Villagers/villagersSlice";
import newVillagersReducer from "../Villagers/newVillagersSlice";
import islandsReducer from "../Islands/IslandsSlice";
import visitorsReducer from "../Visitors/VisitorsSlice";
import usersReducer from "../Users/UsersSlice";

const combinedReducer = combineReducers({
  villagers: villagerReducer,
  newVillagers: newVillagersReducer,
  islands: islandsReducer,
  visitors: visitorsReducer,
  users: usersReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === "users/logout") {
  //   state = undefined;
  // }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
});
