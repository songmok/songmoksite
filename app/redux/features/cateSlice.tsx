import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BlogCate, BlogName, TtokenAndJson } from "../../api/tistory";
export type ICate = {
  id: string;
  parent: string;
  name: string;
  entriesInLogin: string;
};
export type cateState = {
  status: string;
  categories: ICate[];
};
export const cateData = createAsyncThunk<ICate[]>(
  "cateSlice/cateData",
  async () => {
    try {
      const res = await fetch(`${BlogCate + TtokenAndJson + BlogName}`, {
        method: "GET",
      });
      const resData = await res.json();
      return resData;
    } catch (err) {
      return err;
    }
  }
);

const initialState: cateState = {
  status: "",
  categories: [],
};

export const cateSlice = createSlice({
  name: "cateSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cateData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(cateData.fulfilled, (state, action: PayloadAction<ICate[]>) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(cateData.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export default cateSlice.reducer;
