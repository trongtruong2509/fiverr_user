import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as categoryServices from "../../services/categoryService";

import { toast } from "react-toastify";

const initialState = {
   categories: [],
   jobsByCategory: [],
   currentCategory: null,
   currentCategoryItem: null,
   pending: false,
   success: false,
};

export const getCategories = createAsyncThunk("job/getCategories", async () => {
   const response = await categoryServices.getCategories();
   // console.log("[getCategories]", response.content);
   return response.content;
});

export const getCategory = createAsyncThunk(
   "job/getCategory",
   async (categoryId) => {
      const response = await categoryServices.getCategory(categoryId);
      // console.log("[getCategory]", response.content);
      return response.content[0];
   }
);

export const getCategoryItem = createAsyncThunk(
   "job/getCategoryItem",
   async (categoryItemId) => {
      const response = await categoryServices.getCategoryItem(categoryItemId);
      // console.log("[getCategory]", response.content);
      return response.content;
   }
);

export const getJobByCategory = createAsyncThunk(
   "job/getJobByCategory",
   async (id) => {
      const response = await categoryServices.getJobByCategory(id);
      // console.log("[getJobByCategory]", response.content);
      return response.content;
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
            // console.log("[getCategories]", "loading");
            state.pending = true;
         })
         .addCase(getCategories.fulfilled, (state, action) => {
            // console.log("[getCategories] success", action.payload);

            state.categories = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getCategories.rejected, (state) => {
            // console.log("[getCategories] rejected");
            state.categories = [];
            state.success = false;
            state.pending = false;
         })
         .addCase(getCategory.pending, (state) => {
            // console.log("[getCategory]", "loading");
            state.pending = true;
         })
         .addCase(getCategory.fulfilled, (state, action) => {
            // console.log("[getCategory] success", action.payload);

            state.currentCategory = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getCategory.rejected, (state) => {
            // console.log("[getCategory] rejected");
            state.currentCategory = null;
            state.success = false;
            state.pending = false;
         })
         .addCase(getJobByCategory.pending, (state) => {
            // console.log("[getJobByCategory]", "loading");
            state.pending = true;
         })
         .addCase(getJobByCategory.fulfilled, (state, action) => {
            // console.log("[getJobByCategory] success", action.payload);

            state.jobsByCategory = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getJobByCategory.rejected, (state) => {
            // console.log("[getJobByCategory] rejected");
            state.jobsByCategory = [];
            state.success = false;
            state.pending = false;
         })
         .addCase(getCategoryItem.pending, (state) => {
            // console.log("[getCategoryItem]", "loading");
            state.pending = true;
         })
         .addCase(getCategoryItem.fulfilled, (state, action) => {
            // console.log("[getCategoryItem] success", action.payload);

            state.currentCategoryItem = action.payload;
            state.success = true;
            state.pending = false;
         })
         .addCase(getCategoryItem.rejected, (state) => {
            // console.log("[getCategoryItem] rejected");
            state.currentCategoryItem = null;
            state.success = false;
            state.pending = false;
         });
   },
});

// Action creators are generated for each case reducer function
export const {} = categorySlice.actions;

export default categorySlice.reducer;
