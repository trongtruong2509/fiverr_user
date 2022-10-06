import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as jobService from "../../services/jobService";

import { toast } from "react-toastify";

const initialState = {
   searchJobs: [],
   jobs: [],
   // selected: null,
   pending: false,
   success: false,
   // successDelete: false,
   // allow: false, // allow to navigate
};

export const getSearchJobs = createAsyncThunk(
   "job/getSearchJobs",
   async (name) => {
      const response = await jobService.getJobs(name);
      console.log("[getSearchJobs]", response.content);
      return response.content;
   }
);

export const getJobs = createAsyncThunk("job/getJobs", async (name) => {
   const response = await jobService.getJobs(name);
   console.log("[getJobs]", response.content);
   return response.content;
});

export const jobSlice = createSlice({
   name: "job",
   initialState,
   reducers: {
      updateSearchJobs: (state, action) => {
         state.selected = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getSearchJobs.pending, (state) => {
            console.log("[getSearchJobs]", "loading");
            state.pending = true;
         })
         .addCase(getSearchJobs.fulfilled, (state, action) => {
            console.log("[getSearchJobs] success", action.payload);

            state.searchJobs = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getSearchJobs.rejected, (state) => {
            console.log("[getSearchJobs] rejected");
            state.searchJobs = [];
            state.success = false;
            state.pending = false;
         })
         .addCase(getJobs.pending, (state) => {
            console.log("[getJobs]", "loading");
            state.pending = true;
         })
         .addCase(getJobs.fulfilled, (state, action) => {
            console.log("[getJobs] success", action.payload);

            state.jobs = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getJobs.rejected, (state) => {
            console.log("[getJobs] rejected");
            state.jobs = [];
            state.success = false;
            state.pending = false;
         });
   },
});

// Action creators are generated for each case reducer function
export const { updateSearchJobs } = jobSlice.actions;

export default jobSlice.reducer;
