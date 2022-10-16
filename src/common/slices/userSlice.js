import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import * as userService from "../../services/userService";

export const userLogin = createAsyncThunk(
   "user/userLoginStatus",
   async (info, { rejectWithValue }) => {
      try {
         const response = await userService.login(info);
         return response.data.content;
      } catch (err) {
         if (!err.response) {
            throw err;
         }

         return rejectWithValue(err.response.data);
      }
   }
);

export const signUp = createAsyncThunk(
   "user/signUpStatus",
   async (info, { rejectWithValue }) => {
      try {
         const response = await userService.signup(info);

         return response.data.content;
      } catch (err) {
         if (!err.response) {
            throw err;
         }

         return rejectWithValue(err.response.data);
      }
   }
);

export const updateUserInfo = createAsyncThunk(
   "user/updateUserInfoStatus",
   async (info) => {
      const response = await userService.updateUser(info);

      return response.data.content;
   }
);

export const getUser = createAsyncThunk("user/getUser", async (id) => {
   const response = await userService.getUserInfo(id);

   return response.content;
});

const initialState = {
   auth: JSON.parse(localStorage.getItem("fiverr_User")) ?? null,
   current: null,
   bookingJobs: [],
   pending: false,
   success: false,
   allow: false,
   remember: false,
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      updateUser: (state, action) => {
         state.auth = action.payload;
      },
      updateAllow: (state, action) => {
         state.allow = action.payload;
      },
      updateRemember: (state, action) => {
         state.remember = action.payload;
      },
      logoutUpdate: (state) => {
         state.auth = null;
         localStorage.setItem("accessToken", "");
         localStorage.setItem("fiverr_User", null);
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(userLogin.pending, (state) => {
            console.log("[userLogin]", "loading");
            state.pending = true;
         })
         .addCase(userLogin.fulfilled, (state, action) => {
            console.log("[userLogin] success", action.payload);
            state.auth = action.payload;
            state.allow = true;
            state.success = true;
            state.pending = false;
            toast.info("Login successfully");
            localStorage.setItem("accessToken", action.payload.token);

            // if (state.remember) {
            localStorage.setItem("fiverr_User", JSON.stringify(action.payload));
            // }
         })
         .addCase(userLogin.rejected, (state, action) => {
            console.log("[userLogin] rejected", action.payload);
            state.auth = null;
            state.allow = false;
            state.success = false;
            state.pending = false;
            toast.error(action.payload.content);
         })
         .addCase(signUp.pending, (state) => {
            console.log("[signUp]", "loading");
            state.pending = true;
         })
         .addCase(signUp.fulfilled, (state, action) => {
            console.log("[signUp] success", action.payload);
            state.allow = true;
            state.success = true;
            toast.info("New account created");
            state.pending = false;
         })
         .addCase(signUp.rejected, (state, action) => {
            console.log("[signUp] rejected", action.payload);
            state.allow = false;
            state.success = false;
            toast.error(action.payload.content);
            state.pending = false;
         })
         .addCase(updateUserInfo.pending, (state) => {
            console.log("[updateUserInfo]", "loading");
            state.pending = true;
         })
         .addCase(updateUserInfo.fulfilled, (state, action) => {
            console.log("[updateUserInfo] success");
            state.successDelete = true;
            state.pending = false;
            toast.info("Account info updated!");
         })
         .addCase(getUser.fulfilled, (state, action) => {
            console.log("[getUser] success", action.payload);
            state.current = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getUser.rejected, (state, action) => {
            console.log("[getUser] rejected", action.payload);
            state.current = null;
            state.success = false;
            state.pending = false;
         });
   },
});

// Action creators are generated for each case reducer function
export const { updateUser, updateAllow, updateRemember, logoutUpdate } =
   userSlice.actions;

export default userSlice.reducer;
