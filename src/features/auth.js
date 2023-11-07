import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: undefined,
  imageUser: undefined,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUserName: (state, action) => {
      state.isLogin = action.payload;
    },
    addUserPic: (state, action) => {
      state.imageUser = action.payload;
    },
  },
});

export const { addUserPic, addUserName } = auth.actions;
export default auth.reducer;
