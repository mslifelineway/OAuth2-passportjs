import axios from "axios";
import { api } from "./urlConfig";
import store from "../store";

const axiosIntance = axios.create({
  baseURL: api,
});

axiosIntance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth && auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});

axiosIntance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const response = error.response;
    if (response) {
      return Promise.reject(error);
    }
  }
);
export default axiosIntance;
