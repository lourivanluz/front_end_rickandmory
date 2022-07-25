import axios from "axios";
const api = axios.create({
  baseURL: "https://rickandmortyv1.herokuapp.com/",
});
export default api;
