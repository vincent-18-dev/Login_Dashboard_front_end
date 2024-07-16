import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./feature/userAuth/loginSlice";

export const store = configureStore({
  reducer: loginSlice,
});
