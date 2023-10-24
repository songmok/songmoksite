"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { listData } from "../../redux/features/listSlice";
import { useEffect, useState } from "react";
import { cateData } from "../../redux/features/cateSlice";
import { ISliceType } from "../../redux/type/sliceType";
import { useTheme } from "next-themes";
import ListTt from "./ListTt";
import CateTt from "./CateTt";
import Loading from "../loading/Loading";

export default function TistoryItem() {
  const dispatch = useDispatch<AppDispatch>();
  const tTdata = useSelector((state: ISliceType) => state);
  const { theme } = useTheme();
  const [optionCate, setOptionCate] = useState<any>("all");
  const catePage = tTdata.cateSlice.categories.tistory?.item.categories;
  const listPage = tTdata.listSlice.posts.tistory?.item.posts;
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await dispatch(cateData());
      await dispatch(listData());
      setMounted(true);
      setLoading(false);
    }
    fetchData();
  }, [dispatch]);

  const filterCateData =
    optionCate === "all"
      ? listPage
      : listPage.filter((post) => post.categoryId === optionCate);

  return (
    <>
      <article className="flex flex-col">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <div>
            <CateTt
              optionCate={optionCate}
              setOptionCate={setOptionCate}
              catePage={catePage}
            />
            <ListTt filterCateData={filterCateData} themeDark={theme} />
          </div>
        )}
        {/* <ListTt filterCateData={filterCateData} themeDark={theme} /> */}
      </article>
    </>
  );
}
