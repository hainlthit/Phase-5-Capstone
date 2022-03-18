import http from "./http-newVillagers";

const getAll = () => {
  return http.get("");
};

const get = id => {
  return http.get(`/${id}`);
};

const create = data => {
  return http.post("", data);
};

const update = (id, data) => {
  return http.put(`/${id}`, data);
};

const remove = id => {
  return http.delete(`/${id}`);
};

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

const newVillagerDataService = {
  getAll,
  get,
  create,
  update,
  remove,
//   removeAll,
//   findByTitle
};

export default newVillagerDataService;