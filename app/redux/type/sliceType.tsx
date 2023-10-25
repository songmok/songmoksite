import { IPost } from "../features/listSlice";
import { ICate } from "../features/cateSlice";

export type ISliceType = {
  listSlice: {
    posts: {
      tistory: {
        status: string;
        item: {
          posts: IPost[];
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
