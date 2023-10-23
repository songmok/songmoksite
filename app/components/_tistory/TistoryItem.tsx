"use client";

import { useDispatch, useSelector } from "react-redux";
import CateTt from "./CateTt";
import ListTt from "./ListTt";
import { AppDispatch } from "../../redux/store";
import { listData } from "../../redux/features/listSlice";
import { useEffect, useState } from "react";
import { cateData } from "../../redux/features/cateSlice";
import { ISliceType } from "../../redux/type/sliceType";

export default function TistoryItem() {
  const dispatch = useDispatch<AppDispatch>();
  const ttCate = useSelector((state: ISliceType) => state.cateSlice);
  const ttList = useSelector((state: ISliceType) => state.listSlice);

  const [cateNum, setCateNum] = useState<Number>(0);
  useEffect(() => {
    dispatch(cateData());
    dispatch(listData());
  }, [dispatch]);
  const ttCateArr = ttCate.categories.tistory?.item.categories;
  const ttlistArr = ttList.posts.tistory?.item.posts;

  return (
    <>
      <div>
        {ttCateArr?.map((v, i) => {
          return <CateTt cate={v} key={i} />;
        })}
        {ttlistArr?.map((v, i: number) => {
          return <ListTt list={v} key={i} />;
        })}
      </div>
    </>
  );
}
