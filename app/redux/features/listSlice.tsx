import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BlogList, BlogName, PageNumber, TtokenAndJson } from "../../../config";

export type postsA = {
  id: string;
  title: string;
  date: string;
  categoryId: string;
  postUrl: string;
};
export type ListState = {
  status: string;
  posts: postsA[];
};

const initialState: ListState = {
  status: "",
  posts: [],
};

export const listData = createAsyncThunk<postsA[]>(
  "listSlice/listData",
  async () => {
    try {
      const res = await fetch(
        `${BlogList + TtokenAndJson + BlogName + PageNumber}`,
        {
          method: "GET",
        }
      );
      const resData = await res.json();
      return resData;
    } catch (err) {
      return err;
    }
  }
);

export const listSlice = createSlice({
  name: "listSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(listData.fulfilled, (state, action: PayloadAction<postsA[]>) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(listData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default listSlice.reducer;
