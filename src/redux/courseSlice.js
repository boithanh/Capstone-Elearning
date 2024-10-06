import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { khoaHocService } from "../service/khoaHoc.service";

export const getValueCourseApi = createAsyncThunk(
  "course/getValueCourseApi",
  async () => {
    const resolve = await khoaHocService.layAllKhoaHoc();
    return resolve.data;
  }
);
const initialState = {
  listCourse: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getValueCourseApi.fulfilled, (state, action) => {
      state.listCourse = action.payload;
    });
  },
});

export const {} = courseSlice.actions;

export default courseSlice.reducer;
