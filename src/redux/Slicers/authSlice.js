import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authUser } from "../../services/Authentification/authentification";

const initialState = {
  token: null,
  loading: false,
  error: null,
  isRemembered: false,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userCredentials) => {
    const response = await authUser(userCredentials);
    return response;
  }
);

//AuthSlice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    rememberMe: (state) => {
      window.localStorage.setItem("tkn", state.token);
    },
    resetToken: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.token = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message;
      });
  },
});

export const { rememberMe, resetToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
