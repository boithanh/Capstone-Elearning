import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../service/user.service";

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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.editUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getValueUserApi.fulfilled, (state, action) => {
      state.listUsers = action.payload;
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
