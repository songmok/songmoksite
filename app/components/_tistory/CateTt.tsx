"use client";
import React from "react";
import { ICate } from "../../redux/features/cateSlice";

export default function CateTt({
  catePage,
  optionCate,
  setOptionCate,
}: {
  catePage: ICate[];
  optionCate: string;
  setOptionCate: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <label form="category" className="sr-only">
        카테고리 선택하기
      </label>
      <select
        id="category"
        className="w-1/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-10 ml-auto"
        onChange={(e) => setOptionCate(e.target.value)}
        value={optionCate}
      >
        <option value="all">전체</option>
        {catePage?.map((v) => (
          <option key={v.id} value={v.id}>
            {v.name}
          </option>
        ))}
      </select>
    </>
  );
}
