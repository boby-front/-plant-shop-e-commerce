import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: undefined,
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: {
    ["cart/createCartItem"]: (state, action) => {
      state.items.newPlants.find(
        (el) => el.id === action.payload.id
      ).picked = true;
    },
    ["cart/deleteFromCart"]: (state, action) => {
      state.items.nexPlants.find(
        (el) => el.id === action.payload
      ).picked = false;
    },
  },
});

export function getProductsList() {
  return function (dispatch, getState) {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addProducts(data));
      });
  };
}

export const { addProducts } = products.actions;
export default products.reducer;
