import React from "react";
import { Link } from "react-router-dom";

import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

const header = () => {
  return (
    <>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="대체이미지" />
          </Link>
          <Link to="/upload">
            <Button size="large" icon={<DownloadOutlined />}>
              상품 업로드
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default header;
