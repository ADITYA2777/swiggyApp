
import { configureStore } from "@reduxjs/toolkit";
import CerateSlice from "./CerateSlice";

const store = configureStore({
  reducer: {
    cart: CerateSlice,
  },
});

export default store;