import { configureStore } from "@reduxjs/toolkit";

import jobReducer from "./../common/slices/jobSlice";
import commentReducer from "./../common/slices/commentSlice";
import categoryReducer from "./../common/slices/categorySlice";

export const store = configureStore({
   reducer: {
      job: jobReducer,
      comment: commentReducer,
      category: categoryReducer,
   },
});
