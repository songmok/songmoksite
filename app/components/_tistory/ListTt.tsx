"use client";

import { postsA } from "../../redux/features/listSlice";

import TableDark from "./TableDark";
import TableLight from "./TableLight";
export default function ListTt({
  filterCateData,
  themeDark,
}: {
  filterCateData: postsA[];
  themeDark: any;
}) {
  return (
    <div>
      {themeDark === "dark" ? (
        <TableDark filterCateData={filterCateData} />
      ) : (
        <TableLight filterCateData={filterCateData} />
      )}
    </div>
  );
}
