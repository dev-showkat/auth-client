import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import loaderReducer from "./loaderSlice";
import toastReducer from "./toastSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loader: loaderReducer,
    toast: toastReducer,
  },
});

export default store;
