import { Alert, Space, Spin } from "antd";
import React from "react";

export default function Loading() {
  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Spin tip="티스토리 글 목록을 불러오는 중 입니다....">
          <Alert
            message="티스토리 블로그 목록입니다."
            description="티스토리 블로그 목록을 불러오고 있습니다."
            type="info"
          />
        </Spin>
      </Space>
    </>
  );
}
