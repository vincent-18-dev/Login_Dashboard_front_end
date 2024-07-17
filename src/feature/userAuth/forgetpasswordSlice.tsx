import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface UserState {
  email: string;
  status: string;
  isLoggedIn: boolean;
}
const initialState: UserState = {
  email: "",
  status: "idle",
  isLoggedIn: false,
};

export const updateuserPassword = createAsyncThunk<any, UserState>(
  "users/updateuserpasswordStatus",
  async (payload) => {
    const response = await axios.post(
      "http://localhost:3004/forget-password",
      payload
    );
    return response.data;
  }
);
export const forgetpasswordSlice = createSlice({
  name: "forgetpassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateuserPassword.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.isLoggedIn = true;
    });
    builder.addCase(updateuserPassword.rejected, (state, action) => {
      state.status = "password updated failed!";
      state.isLoggedIn = false;
    });
  },
});

export default forgetpasswordSlice.reducer;
