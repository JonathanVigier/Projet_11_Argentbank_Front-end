import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUserProfile,
  editUserProfile,
} from "../../services/UserData/userData";

const initialState = {
  user: {},
  loading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (token) => {
    const response = await fetchUserProfile(token);
    return response;
  }
);

export const editUsername = createAsyncThunk(
  "user/editUsername",
  async (token, editedUsername) => {
    const response = await editUserProfile(token, editedUsername);
    return response;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.user = {};
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.user = initialState;
        state.error = action.error.message;
      });
  },
});

export const { resetUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
