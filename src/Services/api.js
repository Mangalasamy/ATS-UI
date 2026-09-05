import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      const method = config.method?.toLowerCase();

      // GET → add user_id as query parameter
      if (method === "get") {
        config.params = {
          ...config.params,
          userId: Number(userId),
        };
      }

      // POST / PUT / PATCH → add user_id to body
      if (["post", "put", "patch"].includes(method)) {
        config.data = {
          ...config.data,
          userId: Number(userId),
        };
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;