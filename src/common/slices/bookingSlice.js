import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import * as bookingService from "../../services/bookingService";

import { toast } from "react-toastify";

export const getBookingJobs = createAsyncThunk(
   "booking/getBookingJobs",
   async () => {
      const response = await bookingService.getRentingJobs();

      return response.content;
   }
);

export const deleteBookingJobById = createAsyncThunk(
   "booking/deleteBookingJobById",
   async (id) => {
      const response = await bookingService.deleteRentingJob(id);

      return response.content;
   }
);

const initialState = {
   jobs: [],
   deletingJob: null,
   // jobs: [],
   // currentJob: null,
   pending: false,
   success: false,
};

export const bookingSlice = createSlice({
   name: "booking",
   initialState,
   reducers: {
      updateDeletingJob: (state, action) => {
         state.deletingJob = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getBookingJobs.pending, (state) => {
            console.log("[getBookingJobs]", "loading");
            state.pending = true;
         })
         .addCase(getBookingJobs.fulfilled, (state, action) => {
            console.log("[getBookingJobs] success", action.payload);
            state.jobs = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getBookingJobs.rejected, (state, action) => {
            console.log("[getBookingJobs] rejected", action.payload);
            state.jobs = [];
            state.success = false;
            state.pending = false;
         })
         .addCase(deleteBookingJobById.pending, (state) => {
            console.log("[deleteBookingJobById]", "loading");
            state.pending = true;
         })
         .addCase(deleteBookingJobById.fulfilled, (state, action) => {
            console.log("[deleteBookingJobById] success", action.payload);
            console.log(
               "[deleteBookingJobById] deletingJob",
               state.deletingJob
            );

            const idx = state.jobs.findIndex(
               (job) => job.id === state.deletingJob.id
            );

            console.log("[deleteBookingJobById] idx", idx);

            if (idx !== -1) {
               state.jobs.splice(idx, 1);
            }

            state.deletingJob = null;
            state.success = true;
            state.pending = false;
         })
         .addCase(deleteBookingJobById.rejected, (state, action) => {
            console.log("[deleteBookingJobById] rejected", action.payload);
            state.deletingJob = null;
            state.success = false;
            state.pending = false;
            toast.error(
               `Delete booking job ${
                  current(state.deletingJob).congViec.tenCongViec
               } failed. Try again`
            );
         });
   },
});

// Action creators are generated for each case reducer function
export const { updateDeletingJob } = bookingSlice.actions;

export default bookingSlice.reducer;
