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
});

export function getProductsList() {
  return function (dispatch, getState) {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(addProducts(data));
      });
  };
}

export const { addProducts } = products.actions;
export default products.reducer;
