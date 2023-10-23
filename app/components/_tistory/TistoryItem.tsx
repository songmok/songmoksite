"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { listData } from "../../redux/features/listSlice";

export default function TistoryItem() {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: any) => state);
  useEffect(() => {
    dispatch(listData());
  }, []);
  console.log("po", posts);
  return <></>;
}
