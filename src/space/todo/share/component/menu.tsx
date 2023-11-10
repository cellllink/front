import { FolderOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { getMenuItem } from "@share/util/antd.util";
import { Input, Menu as AntdMenu } from "antd";
import { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { AddGroupOrListSubject, currentItemSubject } from "../util/signal.util";
import { TodoGroup } from "../type";
import { ItemType } from "antd/lib/menu/hooks/useItems";

function Group(group: TodoGroup) {}

function List() {}

interface WillAddProp {
  type: "group" | "list";
}

function WillAdd({ type }: WillAddProp) {
  const placeholder = `请输入${type === "list" ? "列表" : "分组"}名称`;
  const [title, setTitle] = useState<string>("xxxxx");

  const onClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  const onBlur = () => {
    // 调用创建接口
    console.log("blur");
  };

  return (
    <Input
      autoFocus
      placeholder={placeholder}
      value={title}
      bordered={false}
      style={{ padding: 0 }}
      onClick={onClick}
      onChange={(e) => setTitle(e.target.value)}
      onBlur={onBlur}
    />
  );
}

export default function Menu() {
  const [menuList, setMenuList] = useState<ItemType[]>([
    getMenuItem("Navigation One", "sub1", <FolderOutlined style={{ fontSize: "16px" }} />, [
      getMenuItem("Option 1", "1", <UnorderedListOutlined style={{ fontSize: "16px" }} />),
      getMenuItem("Option 2", "2"),
      getMenuItem("Option 3", "3"),
      getMenuItem("Option 4", "4"),
    ]),
  ]);

  useEffect(() => {
    const Subscription = AddGroupOrListSubject.subscribe((type: "group" | "list") => {
      console.log(type);

      setMenuList([
        ...menuList,
        getMenuItem(
          <WillAdd type={type} />,
          type === "list" ? "xxxxxx" : "aaaaaa",
          type === "list" ? <UnorderedListOutlined style={{ fontSize: "16px" }} /> : <FolderOutlined style={{ fontSize: "16px" }} />
        ),
      ]);
    });
    return () => Subscription.unsubscribe();
  }, []);

  const onClick: MenuProps["onClick"] = () => {
    console.log("asdas");

    // currentGroupSubject.next(Math.floor(Math.random() * 100));
  };

  return (
    <div className="menu flex1 scrollbar__w1">
      <AntdMenu onClick={onClick} style={{ width: 220 }} mode="inline" items={menuList} />
    </div>
  );
}
