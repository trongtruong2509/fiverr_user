import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as commentService from "../../services/commentService";

import { toast } from "react-toastify";

const initialState = {
   comments: [],
   // jobs: [],
   // currentJob: null,
   pending: false,
   success: false,
   // successDelete: false,
   // allow: false, // allow to navigate
};

export const getComments = createAsyncThunk("job/getComments", async (name) => {
   const response = await commentService.getComments(name);
   console.log("[getComments]", response.content);
   return response.content;
});

export const commentSlice = createSlice({
   name: "comment",
   initialState,
   reducers: {
      // updateSearchJobs: (state, action) => {
      //    state.selected = action.payload;
      // },
   },
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
         .addCase(getComments.rejected, (state) => {
            console.log("[getComments] rejected");
            state.comments = [];
            state.success = false;
            state.pending = false;
         });
   },
});

// Action creators are generated for each case reducer function
export const {} = commentSlice.actions;

export default commentSlice.reducer;
