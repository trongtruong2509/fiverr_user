import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as bookingService from "../../services/bookingService";

import { toast } from "react-toastify";

export const getBookingJobs = createAsyncThunk(
   "booking/getBookingJobs",
   async () => {
      const response = await bookingService.getRentingJobs();

      return response.content;
   }
);

const initialState = {
   jobs: [],
   // jobs: [],
   // currentJob: null,
   pending: false,
   success: false,
};

export const bookingSlice = createSlice({
   name: "booking",
   initialState,
   reducers: {
      // updateSearchJobs: (state, action) => {
      //    state.selected = action.payload;
      // },
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
         });
   },
});

// Action creators are generated for each case reducer function
export const {} = bookingSlice.actions;

export default bookingSlice.reducer;
