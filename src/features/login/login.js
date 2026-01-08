import { createSlice, createAsyncThunk, Tuple } from "@reduxjs/toolkit";
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

// SHOW ALL USERS
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

// DELETE USER
export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        "http://localhost/root-project/Backend/auth/user.php",
        { data: { id } }
      );

      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete user"
      );
    }
  }
);

// UPDATE USER
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        "http://localhost/root-project/Backend/auth/user.php",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        return userData;
      } else {
        return rejectWithValue(res.data.message);
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update user"
      );
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
      //  LOGIN API CALL
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

      // SHOW ALL USERS
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
      })

      // DELETE USER
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE USER
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id, role } = action.payload;
        const user = state.users.find((u) => u.id === id);
        if (user) {
          user.role_ENUM = role;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
