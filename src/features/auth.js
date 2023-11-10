import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: undefined,
  imageUser: undefined,
  userName: undefined,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUserName: (state, action) => {
      state.userName = action.payload;
    },
    addUserPic: (state, action) => {
      state.imageUser = action.payload;
    },
    isLoginAction: (state) => {
      state.isLogin = true;
    },
    isLogoutAction: (state) => {
      state.isLogin = undefined;
    },
  },
});

export const { addUserPic, addUserName, isLoginAction, isLogoutAction } =
  auth.actions;
export default auth.reducer;
