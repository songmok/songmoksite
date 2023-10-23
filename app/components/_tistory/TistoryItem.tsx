"use client";

import { useDispatch, useSelector } from "react-redux";
import CateTt from "./CateTt";
import ListTt from "./ListTt";
import { AppDispatch, RootState } from "../../redux/store";
import { listData } from "../../redux/features/listSlice";
import { useEffect, useState } from "react";
import { cateData } from "../../redux/features/cateSlice";
import { ISliceType } from "../../redux/type/sliceType";

export default function TistoryItem() {
  const dispatch = useDispatch<AppDispatch>();
  const tTdata = useSelector((state: ISliceType) => state);
  const [cateNum, setCateNum] = useState<Number>(0);
  useEffect(() => {
    dispatch(cateData());
    dispatch(listData());
  }, []);

  const catePage = tTdata.cateSlice.categories.tistory?.item.categories;
  const listPage = tTdata.listSlice.posts.tistory?.item.posts;

  return (
    <>
      <div>
        {catePage?.map((v, i) => {
          return <CateTt cate={v} key={i} />;
        })}
        {listPage?.map((v, i: number) => {
          return <ListTt list={v} key={i} />;
        })}
      </div>
    </>
  );
}
