import React from "react";
import { postsA } from "../features/listSlice";
import { ICate } from "../features/cateSlice";

export type ISliceType = {
  listSlice: {
    posts: {
      tistory: {
        status: string;
        item: {
          posts: postsA[];
        };
      };
    };
  };
  cateSlice: {
    categories: {
      tistory: {
        status: string;
        item: {
          categories: ICate[];
        };
      };
    };
  };
};
