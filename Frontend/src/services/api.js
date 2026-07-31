import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: "application/json",
  },
});

export default api;