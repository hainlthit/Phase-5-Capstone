import {
    RETRIEVE_VILLAGERS
  } from "./types";
  
  import VillagerDataService from "../services/villagerServices";
  

  export const retrieveVillagers = () => async (dispatch) => {
    try {
      const res = await VillagerDataService.getAll();
  
      dispatch({
        type: RETRIEVE_VILLAGERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  