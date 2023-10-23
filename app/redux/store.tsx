import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./features/listSlice";
import cateSlice from "./features/cateSlice";
export const store = configureStore({
  reducer: {
    listSlice,
    cateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
