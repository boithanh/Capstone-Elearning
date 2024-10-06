import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../service/user.service";
import { getLocalStorage } from "../utils/utils";

export const getValueUserApi = createAsyncThunk(
  "user/getValueUserApi",
  async () => {
    const resolve = await userService.layDanhSachNguoiDung();
    return resolve.data;
  }
);

const initialState = {
  listUsers: [],
  editUser: null,
  infoUser: getLocalStorage("user")
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.editUser = action.payload;
    },
    userStatus: (state, action) => {
      state.infoUser = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getValueUserApi.fulfilled, (state, action) => {
      state.listUsers = action.payload;
    });
  },
});

export const { setUser, userStatus } = userSlice.actions;

export default userSlice.reducer;
