import { FolderOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { getMenuItem } from "@share/util/antd.util";
import { Input, Menu as AntdMenu } from "antd";
import { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { AddGroupOrListSubject, currentItemSubject } from "../util/signal.util";
import { TodoGroup } from "../type";

function Group(group: TodoGroup) {}

function List() {}

export default function Menu() {
  const [title, setTitle] = useState<string>("xxxxx");

  useEffect(() => {
    const Subscription = AddGroupOrListSubject.subscribe((type: "group" | "list") => {
      console.log(type);
    });
    return () => Subscription.unsubscribe();
  }, []);

  const items: MenuProps["items"] = [
    getMenuItem("Navigation One", "sub1", <FolderOutlined style={{ fontSize: "16px" }} />, [
      getMenuItem("Option 1", "1", <UnorderedListOutlined style={{ fontSize: "16px" }} />),
      getMenuItem("Option 2", "2"),
      getMenuItem("Option 3", "3"),
      getMenuItem("Option 4", "4"),
    ]),

    getMenuItem(
      <Input
        autoFocus
        placeholder="请输入分组名称"
        value={title}
        bordered={false}
        style={{ padding: 0 }}
        onChange={(e) => setTitle(e.target.value)}
      />,
      "sub5",
      <FolderOutlined style={{ fontSize: "16px" }} />
    ),
  ];

  const onClick: MenuProps["onClick"] = () => {
    // currentGroupSubject.next(Math.floor(Math.random() * 100));
  };

  return (
    <div className="menu flex1 scrollbar__w1">
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={items} />
    </div>
  );
}
