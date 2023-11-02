import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: false,
  },
  reducers: {
    auth(state) {
      if (sessionStorage.getItem("user")) {
        state.value = true;
      } else {
        state.value = false;
      }
    },
    login(state) {
      state.value = true;
      sessionStorage.setItem("user", state.value);
      toast.success("Welcome my friend");
    },
    logout(state) {
      state.value = false;
      sessionStorage.setItem("user", state.value);
      toast.error("Have a nice day");
    },
  },
});

export const { auth, login, logout } = userSlice.actions;

export const selectLogin = (state) => state.user.value;

export default userSlice.reducer;
