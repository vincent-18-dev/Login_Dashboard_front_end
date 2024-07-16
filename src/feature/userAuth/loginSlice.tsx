import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  email: string;
  password: string;
  status: string;
}
const initialState: UserState = {
  email: "",
  password: "",
  status: "idle",
};
export const fetchuserLogin = createAsyncThunk<any, UserState>(
  "users/loginStatus",
  async (payload) => {
    const response = await axios.post("http://localhost:3004/login", payload);
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
      console.log("action", action);
    });
  },
});

export default loginSlice.reducer;
