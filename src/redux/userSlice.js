import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../service/user.service";

export const getValueUserApi = createAsyncThunk(
  "user/getValueUserApi",
  async () => {
    const resolve = await userService.LayDanhSachNguoiDung();
    console.log(resolve.data);
    return resolve.data;
  }
);
const initialState = {
  listUsers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getValueUserApi.fulfilled, (state, action) => {
      state.listUsers = action.payload;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
