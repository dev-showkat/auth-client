import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginService,
  registerService,
  logoutService,
  forgetPasswordService,
  resetPasswordService,
  emailVerificationService,
} from "../services/auth";

const initialState = {
  user: null,
  token: null,
  loading: false,
  emailRecieved: false,
  isVerified: false,
  verificationEmail: null,
  resetPasswordSuccess: false,
};

export const register = createAsyncThunk("auth/register", async (payload) => {
  const data = await registerService(payload);
  return data;
});

export const emailVerification = createAsyncThunk(
  "auth/email-verification",
  async (payload) => {
    const data = await emailVerificationService(payload);
    return data;
  }
);

export const login = createAsyncThunk("auth/login", async (payload) => {
  const data = await loginService(payload);
  return data;
});

export const logout = createAsyncThunk("auth/logout", async (payload) => {
  const data = await logoutService(payload);
  return data;
});

export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (payload) => {
    const data = await forgetPasswordService(payload);
    return data;
  }
);

export const resetPassword = createAsyncThunk(
  "auth/reset-password",
  async (payload) => {
    const data = await resetPasswordService(payload);
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      const { user, token } = action.payload;
      state.user = JSON.stringify(user);
      state.token = token;
    },
    removeUser(state) {
      state.user = null;
      state.token = null;
      state.loading = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.verificationEmail = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.verificationEmail = action.payload.email;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.verificationEmail = null;
      })
      .addCase(emailVerification.pending, (state) => {
        state.loading = true;
        state.isVerified = false;
      })
      .addCase(emailVerification.fulfilled, (state) => {
        state.loading = false;
        state.isVerified = true;
        state.verificationEmail = null;
      })
      .addCase(emailVerification.rejected, (state) => {
        state.user = null;
        state.token = null;
        state.loading = false;
        state.isVerified = false;
        localStorage.clear();
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        state.loading = false;
      })
      .addCase(login.rejected, (state) => {
        state.user = null;
        state.token = null;
        state.loading = false;
        localStorage.clear();
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.loading = false;
        localStorage.clear();
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
      })
      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
        state.verificationEmail = null;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        const { email } = action.payload;
        state.loading = false;
        state.verificationEmail = email;
      })
      .addCase(forgetPassword.rejected, (state) => {
        state.loading = false;
        state.verificationEmail = null;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.resetPasswordSuccess = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.resetPasswordSuccess = true;
        state.verificationEmail = null;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.loading = false;
        state.resetPasswordSuccess = false;
      });
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
