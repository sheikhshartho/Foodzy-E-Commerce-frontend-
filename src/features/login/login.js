import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//  LOGIN API CALL
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost/root-project/Backend/auth/login.php",
        loginData
      );

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        return res.data.user;
      } else {
        return rejectWithValue(res.data.message);
      }
    } catch (error) {
      return rejectWithValue("Something went wrong", error);
    }
  }
);

// SHOW ALL USERS - FIXED
export const showUsers = createAsyncThunk(
  "auth/showUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "http://localhost/root-project/Backend/auth/user.php"
      );
      return res.data;
    } catch (error) {
      console.log(error, "this is error ");
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
