import { configureStore } from "@reduxjs/toolkit";
import products from "./products";
import cart from "./cart";
import auth from "./auth";

export const store = configureStore({
  reducer: {
    products,
    cart,
    auth,
  },
});
