import http from "./http-villagers";

const getAll = () => {
  return http.get("");
};

const VillagerDataService = {
  getAll
};

export default VillagerDataService;

