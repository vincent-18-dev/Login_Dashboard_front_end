import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  email: string;
  password: string;
  status: string;
  isLoggedIn: boolean;
}
const initialState: UserState = {
  email: "",
  password: "",
  status: "idle",
  isLoggedIn: false,
};
export const fetchuserLogin = createAsyncThunk<any, UserState>(
  "users/loginStatus",
  async (payload) => {
    const response = await axios.post(
      "https://login-dashboard-backend.vercel.app/login",
      payload
    );
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchuserLogin.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.isLoggedIn = true;
      console.log("action", action.payload.message);
    });
    builder.addCase(fetchuserLogin.rejected, (state, action) => {
      state.status = "User Not Found!";
      state.isLoggedIn = false;
      console.log("action", action);
    });
  },
});

export default loginSlice.reducer;
