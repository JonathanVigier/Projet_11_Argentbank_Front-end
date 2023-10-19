import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Slicers/authSlice.js";
import { userReducer } from "./Slicers/userSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
