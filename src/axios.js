import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export default instance;
