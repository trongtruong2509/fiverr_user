import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as jobService from "../../services/jobService";

import { toast } from "react-toastify";

const initialState = {
   searchJobs: [],
   jobs: [],
   currentJob: null,
   pending: false,
   success: false,
   // successDelete: false,
   // allow: false, // allow to navigate
};

export const getSearchJobs = createAsyncThunk(
   "job/getSearchJobs",
   async (name) => {
      const response = await jobService.getJobs(name);
      // console.log("[getSearchJobs]", response.content);
      return response.content;
   }
);

export const getJobs = createAsyncThunk("job/getJobs", async (name) => {
   const response = await jobService.getJobs(name);
   console.log("[getJobs]", response.content);
   return response.content;
});

export const getCurrentJobs = createAsyncThunk(
   "job/getCurrentJobs",
   async (id) => {
      const response = await jobService.getJobById(id);
      console.log("[getCurrentJobs]", response.content);
      return response.content[0];
   }
);

export const rentAJob = createAsyncThunk("job/rentAJob", async (model) => {
   const response = await jobService.rentJob(model);
   console.log("[rentAJob]", response.content);
   return response.content[0];
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
            // console.log("[getSearchJobs]", "loading");
            state.pending = true;
         })
         .addCase(getSearchJobs.fulfilled, (state, action) => {
            // console.log("[getSearchJobs] success", action.payload);

            state.searchJobs = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getSearchJobs.rejected, (state) => {
            // console.log("[getSearchJobs] rejected");
            state.searchJobs = [];
            state.success = false;
            state.pending = false;
         })
         .addCase(getJobs.pending, (state) => {
            // console.log("[getJobs]", "loading");
            state.pending = true;
         })
         .addCase(getJobs.fulfilled, (state, action) => {
            // console.log("[getJobs] success", action.payload);

            state.jobs = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getJobs.rejected, (state) => {
            // console.log("[getJobs] rejected");
            state.jobs = [];
            state.success = false;
            state.pending = false;
         })
         .addCase(getCurrentJobs.pending, (state) => {
            // console.log("[getCurrentJobs]", "loading");
            state.pending = true;
         })
         .addCase(getCurrentJobs.fulfilled, (state, action) => {
            // console.log("[getCurrentJobs] success", action.payload);

            state.currentJob = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getCurrentJobs.rejected, (state) => {
            // console.log("[getCurrentJobs] rejected");
            state.currentJob = [];
            state.success = false;
            state.pending = false;
         })
         .addCase(rentAJob.pending, (state) => {
            // console.log("[rentAJob]", "loading");
            state.pending = true;
         })
         .addCase(rentAJob.fulfilled, (state, action) => {
            // console.log("[rentAJob] success", action.payload);

            // state.currentJob = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(rentAJob.rejected, (state) => {
            // console.log("[rentAJob] rejected");
            // state.currentJob = [];
            state.success = false;
            state.pending = false;
         });
   },
});

// Action creators are generated for each case reducer function
export const { updateSearchJobs } = jobSlice.actions;

export default jobSlice.reducer;
