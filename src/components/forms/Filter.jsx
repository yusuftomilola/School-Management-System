import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: <a href="https://www.antgroup.com">A-Z</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">Sort by name </a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "Filter 1",
    key: "3",
  },
  {
    label: "Filter 2",
    key: "4",
  },
];

const Filter = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="bg-[#f1efff] text-[#42526e] font-normal text-[14px] py-[10px] px-5 rounded-lg">
          Filter
          <DownOutlined className="text-[10px]" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default Filter;
