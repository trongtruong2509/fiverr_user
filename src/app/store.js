import { configureStore } from "@reduxjs/toolkit";

import jobReducer from "./../common/slices/jobSlice";

export const store = configureStore({
   reducer: {
      job: jobReducer,
   },
});
