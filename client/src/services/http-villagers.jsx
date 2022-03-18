import axios from "axios";

export default axios.create({
  baseURL: "https://acnhapi.com/v1a/villagers",
  headers: {
    "Content-type": "application/json"
  }
});