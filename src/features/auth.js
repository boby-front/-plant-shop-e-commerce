import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: undefined,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUserPic: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { addUserPic } = auth.actions;
export default auth.reducer;
