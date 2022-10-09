import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as categoryServices from "../../services/categoryService";

import { toast } from "react-toastify";

const initialState = {
   categories: [],
   currentCategory: null,
   pending: false,
   success: false,
};

export const getCategories = createAsyncThunk("job/getCategories", async () => {
   const response = await categoryServices.getCategories();
   console.log("[getCategories]", response.content);
   return response.content;
});

export const getCategory = createAsyncThunk(
   "job/getCategory",
   async (categoryId) => {
      const response = await categoryServices.getCategory(categoryId);
      console.log("[getCategory]", response.content);
      return response.content[0];
   }
);

export const categorySlice = createSlice({
   name: "category",
   initialState,
   reducers: {
      // updateSearchJobs: (state, action) => {
      //    state.selected = action.payload;
      // },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getCategories.pending, (state) => {
            console.log("[getCategories]", "loading");
            state.pending = true;
         })
         .addCase(getCategories.fulfilled, (state, action) => {
            console.log("[getCategories] success", action.payload);

            state.categories = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getCategories.rejected, (state) => {
            console.log("[getCategories] rejected");
            state.categories = [];
            state.success = false;
            state.pending = false;
         })
         .addCase(getCategory.pending, (state) => {
            console.log("[getCategory]", "loading");
            state.pending = true;
         })
         .addCase(getCategory.fulfilled, (state, action) => {
            console.log("[getCategory] success", action.payload);

            state.currentCategory = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getCategory.rejected, (state) => {
            console.log("[getCategory] rejected");
            state.currentCategory = null;
            state.success = false;
            state.pending = false;
         });
   },
});

// Action creators are generated for each case reducer function
export const {} = categorySlice.actions;

export default categorySlice.reducer;
