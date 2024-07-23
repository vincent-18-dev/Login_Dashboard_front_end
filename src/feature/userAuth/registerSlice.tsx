import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface UserState {
  email: string;
  password: string;
  username: string;
  phone: number | string;
  status: string;
  isLoggedIn: boolean;
}
const initialState: UserState = {
  email: "",
  password: "",
  username: "",
  phone: "",
  status: "idle",
  isLoggedIn: false,
};

export const fetchuserRegister = createAsyncThunk<any, UserState>(
  "users/registerStatus",
  async (payload) => {
    const response = await axios.post(
      "https://login-dashboard-backend.vercel.app/register",
      payload
    );
    return response.data;
  }
);
export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchuserRegister.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.isLoggedIn = true;
      console.log("action", action.payload.message);
    });
    builder.addCase(fetchuserRegister.rejected, (state, action) => {
      state.status = "User profile created failed!";
      state.isLoggedIn = false;
      console.log("action", action);
    });
  },
});

export default registerSlice.reducer;
