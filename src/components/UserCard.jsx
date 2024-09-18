import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: <a href="#">View</a>,
    key: "0",
  },
  {
    label: <a href="#">Edit </a>,
    key: "1",
  },

  {
    label: "Delete",
    key: "3",
  },
];

function UserCard({ name, qualification, subject, clas, imageUser }) {
  return (
    <div className="flex flex-col w-full rounded-md shadow-sm bg-white p-6 mb-5 h-[200px]">
      <div className="flex">
        <div>
          <img src={imageUser} alt="user" className="h-[120px]" />
        </div>
        <div className="ml-4">
          <h3 className="text-[#172B4D] text-[20px] font-medium whitespace-nowrap">
            {name}
          </h3>
          <p className="text-[#5243aa] text[14px] font-normal bg-[#faf5f7] p-1">
            {qualification}
          </p>
          <p className="text-[#172B4D] whitespace-nowrap">Subject: {subject}</p>
          <p className="text-[#172B4D]">Class: {clas}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4 justify-end ">
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
          className="pl-[50px]"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className=" text-[#7A869A] ">
              more
              <DownOutlined className="text-[10px]" />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
}

export default UserCard;

