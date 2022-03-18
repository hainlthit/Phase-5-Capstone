import axios from "axios";

export default axios.create({
  baseURL: "/villagers",
  headers: {
    "Content-type": "application/json"
  }
});