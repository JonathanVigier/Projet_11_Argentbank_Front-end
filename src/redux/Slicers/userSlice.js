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
  async (data) => {
    const response = await editUserProfile(data);
    return response;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.user = initialState;
        state.error = action.error.message;
      })
      .addCase(editUsername.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUsername.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(editUsername.rejected, (state, action) => {
        state.loading = false;
        state.user = initialState;
        state.error = action.error.message;
      });
  },
});

export const { resetUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
