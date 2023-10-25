import React, { useEffect, useState } from "react";
import { ConfigProvider, Table, theme } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IPost } from "../../redux/features/listSlice";
import Link from "next/link";
export default function TableLight({
  filterCateData,
}: {
  filterCateData: IPost[];
}) {
  useEffect(() => {
    setPagination((pageSize) => ({
      ...pageSize,
      total: filterCateData?.length,
    }));
  }, [filterCateData]);
  const columns: ColumnsType<IPost> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (_, v) => (
        <div style={{ textAlign: "left" }}>
          <Link href={v.postUrl} target={"_blank"}>
            {v.title}
          </Link>
        </div>
      ),
      align: "center",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
  ];
  const [pagination, setPagination] = useState({
    total: filterCateData?.length,
    pageSize: 5,
    current: 1,
    pageSizeOptions: ["10", "20", "30", "40"],
  });

  const paginationChange = (page: number, pageSize: number) => {
    setPagination({
      ...pagination,
      current: page,
      pageSize: pageSize,
    });
  };
  return (
    <div>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Table
          columns={columns}
          dataSource={filterCateData}
          rowKey={(render) => render.id}
          className="container"
          pagination={{
            ...pagination,
            position: ["bottomCenter"],
            onChange: paginationChange, // 페이지 변경 이벤트 핸들러 지정
          }}
        />
      </ConfigProvider>
    </div>
  );
}
