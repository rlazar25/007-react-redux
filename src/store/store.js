import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import activeSlice from "./activeSlice";

const store = configureStore({
  reducer: {
    productStore: productSlice,
    activeStore: activeSlice 
  },
});

export default store;
