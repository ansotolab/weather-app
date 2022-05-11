import axios from "axios";

const service = axios.create({
  baseURL: "",
  timeout: 5000,
});

// Request interceptors
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Response interceptors
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject();
  }
);

export default service;
