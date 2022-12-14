import { configureStore } from "@reduxjs/toolkit";

import jobReducer from "./../common/slices/jobSlice";
import commentReducer from "./../common/slices/commentSlice";
import categoryReducer from "./../common/slices/categorySlice";
import userReducer from "./../common/slices/userSlice";
import bookingReducer from "./../common/slices/bookingSlice";

export const store = configureStore({
   reducer: {
      job: jobReducer,
      comment: commentReducer,
      category: categoryReducer,
      user: userReducer,
      booking: bookingReducer,
   },
});
