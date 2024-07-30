import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    myName: "Tica",
    allProducts: [],
    isLoading: false,
    allFavoriteProducts: [],
  },
  reducers: {
    changeMyName: (state, action) => {
      state.myName = action.payload;
    },
    saveAllProductsAction: (state, action) => {
      state.allProducts = action.payload;
      state.isLoading = true;
    },
  },
});

export const { changeMyName, saveAllProductsAction } = productSlice.actions;
export default productSlice.reducer;
