import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./feature/userAuth/userauthSlice";
import registerSlice from "./feature/userAuth/registerSlice";
import forgetpasswordSlice from "./feature/userAuth/forgetpasswordSlice";
export const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
    password: forgetpasswordSlice,
  },
});
