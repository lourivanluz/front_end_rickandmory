import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:5775",
});
export default api;
