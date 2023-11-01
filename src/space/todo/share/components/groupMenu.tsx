import { FolderOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { getMenuItem } from "@share/util/antd.util";
import { Input, Menu } from "antd";
import { useState } from "react";
import type { MenuProps } from "antd";
import { currentGroupSubject, currentItemSubject } from "../util/signal.util";

export default function GroupMenu() {
  const [title, setTitle] = useState<string>("xxxxx");

  const items: MenuProps["items"] = [
    getMenuItem("Navigation One", "sub1", <FolderOutlined style={{ fontSize: "16px" }} />, [
      getMenuItem("Option 1", "1", <UnorderedListOutlined style={{ fontSize: "16px" }} />),
      getMenuItem("Option 2", "2"),
      getMenuItem("Option 3", "3"),
      getMenuItem("Option 4", "4"),
    ]),

    getMenuItem("Navigation Two", "sub2", <FolderOutlined style={{ fontSize: "16px" }} />, [
      getMenuItem("Option 5", "5"),
      getMenuItem("Option 6", "6"),
      getMenuItem("Submenu", "sub3", null, [
        getMenuItem("Option 7", "7", null, [getMenuItem("Option 91", "91"), getMenuItem("Option 101", "101")]),
        getMenuItem("Option 8", "8"),
      ]),
    ]),

    getMenuItem("Navigation Three", "sub4", <FolderOutlined style={{ fontSize: "16px" }} />, [
      getMenuItem("Option 9", "9"),
      getMenuItem("Option 10", "10"),
      getMenuItem("Option 11", "11"),
      getMenuItem("Option 12", "12"),
    ]),
    getMenuItem("Option 13", "13"),
    getMenuItem("Option 14", "14"),

    getMenuItem(
      <Input
        placeholder="请输入分组名称"
        value={title}
        bordered={false}
        style={{ padding: 0 }}
        onChange={(e) => setTitle(e.target.value)}
      />,
      "sub5",
      <FolderOutlined style={{ fontSize: "16px" }} />,
      []
    ),
  ];

  const onClick: MenuProps["onClick"] = () => {
    currentGroupSubject.next(Math.floor(Math.random() * 100));
  };

  return (
    <div className="menu flex1 scrollbar__w1">
      <Menu onClick={onClick} style={{ width: 220, height: "100%" }} mode="inline" items={items} />
    </div>
  );
}
