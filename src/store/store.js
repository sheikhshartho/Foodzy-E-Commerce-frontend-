import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/login/login";
import productReducer from '../features/products/products'
import orderReducer from "../features/products/order";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    order: orderReducer,
    
  },
});
