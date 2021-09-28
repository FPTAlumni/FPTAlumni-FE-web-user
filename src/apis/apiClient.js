import axios from "axios";
import { axiosInterceptor } from "./apiInterceptor";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_DOMAIN}`,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

const apiClient = axiosInterceptor(axiosClient);

export { apiClient };
