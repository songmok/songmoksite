"use client";

import { IPost } from "../../redux/features/listSlice";

import TableDark from "./TableDark";
import TableLight from "./TableLight";
export default function ListTt({
  filterCateData,
  themeDark,
}: {
  filterCateData: IPost[];
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
