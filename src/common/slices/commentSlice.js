import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as commentService from "../../services/commentService";

import { toast } from "react-toastify";

const initialState = {
   comments: [],
   pending: false,
   success: false,
};

export const getComments = createAsyncThunk(
   "comment/getComments",
   async (name, { rejectWithValue }) => {
      try {
         const response = await commentService.getComments(name);
         console.log("[getComments]", response.content);
         return response.content;
      } catch (err) {
         if (!err.response) {
            throw err;
         }

         return rejectWithValue(err.response.data);
      }
   }
);

export const postNewComment = createAsyncThunk(
   "comment/postNewComment",
   async (comment) => {
      const response = await commentService.postComment(comment);
      console.log("[postNewComment]", response.content);
      return response.content;
   }
);

export const commentSlice = createSlice({
   name: "comment",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getComments.pending, (state) => {
            console.log("[getComments]", "loading");
            state.pending = true;
         })
         .addCase(getComments.fulfilled, (state, action) => {
            console.log("[getComments] success", action.payload);

            state.comments = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getComments.rejected, (state, action) => {
            console.log("[getComments] rejected", action.payload.message);
            state.comments = [];
            state.success = false;
            state.pending = false;
            toast.error(action.payload.message);
         })
         .addCase(postNewComment.pending, (state) => {
            console.log("[postNewComment]", "loading");
            state.pending = true;
         })
         .addCase(postNewComment.fulfilled, (state, action) => {
            console.log("[postNewComment] success", action.payload);
            state.success = true;
            state.pending = false;
            toast.info("New comment added");
         })
         .addCase(postNewComment.rejected, (state, action) => {
            console.log("[postNewComment] rejected");
            // state.comments = [];
            state.success = false;
            state.pending = false;
            toast.error(action.payload.content);
         });
   },
});

// Action creators are generated for each case reducer function
export const {} = commentSlice.actions;

export default commentSlice.reducer;
