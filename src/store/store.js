import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/login/login";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
