import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import courseSlice from "./courseSlice";
import imageSlice from "./imageSlice"

export const store = configureStore({
  reducer: { userSlice, courseSlice, imageSlice },
});
