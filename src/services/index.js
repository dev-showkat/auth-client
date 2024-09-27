// src/apiService.js

import axios from "axios";
import store from "../store";
import { setLoading } from "../store/loaderSlice";
import { showToast } from "../store/toastSlice";
import { removeUser } from "../store/authSlice";

const baseURL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch(setLoading(true));
    const state = store.getState();
    const { token } = state.auth;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    store.dispatch(setLoading(false));
    store.dispatch(
      showToast({
        message: error?.response?.data?.message || "Something went wrong",
        severity: "error",
      })
    );
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(setLoading(false));
    return response;
  },
  (error) => {
    store.dispatch(setLoading(false));
    store.dispatch(
      showToast({
        message: error?.response?.data?.message || "Something went wrong",
        severity: "error",
      })
    );
    if (error?.status === 403) {
      store.dispatch(removeUser());
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
