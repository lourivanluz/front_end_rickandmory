import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || process.env.REACT_APP_LOCALHOST,
});
export default api;
