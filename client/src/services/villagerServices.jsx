import http from "../http-common";

class VillagerDataService {
  getAll() {
    return http.get("/villagers");
  }
}

export default new VillagerDataService();