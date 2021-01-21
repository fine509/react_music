import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config.js";
const request = {
  get: (url, params = {}) => {
    return axios.get(url, { params });
  },
  post: (url, params = {}, data = {}) => {
    return axios.post(url, data, { params });
  },
};
axios.interceptors.request.use((config) => {
  return config;
});
axios.interceptors.response.use((config) => {
  return config;
});

export default request;
