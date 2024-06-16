import { FolderOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { getMenuItem } from "@share/util/antd.util";
import { Input, Menu as AntdMenu } from "antd";
import { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { AddGroupOrListSubject, currentItemSubject } from "../util/signal.util";
import { TodoGroup } from "../type";
import { todoGroupHttpService } from "@share/http/api/todo.http.service";
import { BsTodoGroupPo } from "@share/http/po/bs.todo.po";
import { ItemType } from "antd/lib/menu/interface";

function orderMenu(list: BsTodoGroupPo[]) {
  const groups = list.filter((i) => !i.catalogue_id);
  groups.forEach((group) => {
    const listOfGroup = list.filter((i) => i.catalogue_id === group.id);
    let HEAD = listOfGroup.find((i) => !i.order_prev_id);
    group.children = [];
    while (!!HEAD) {
      group.children.push(HEAD);
      HEAD = listOfGroup.find((i) => i.order_prev_id === HEAD!.id);
    }
  });
  return groups;
}

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
  const [menuList, setMenuList] = useState<ItemType[]>([]);

  useEffect(() => {
    todoGroupHttpService
      .list({
        scene_uuid: "test",
      })
      .subscribe((list) => {
        setMenuList(
          orderMenu(list).map((group) => {
            return getMenuItem(
              group.title,
              group.id,
              <FolderOutlined style={{ fontSize: "16px" }} />,
              group.children.length === 0
                ? undefined
                : group.children.map((list) => getMenuItem(list.title, list.id, <UnorderedListOutlined style={{ fontSize: "16px" }} />)),
            );
          }),
        );
      });
    const Subscription = AddGroupOrListSubject.subscribe((type: "group" | "list") => {
      todoGroupHttpService.add({});

      setMenuList([
        ...menuList,
        getMenuItem(
          <WillAdd type={type} />,
          type === "list" ? "新列表" : "新分组",
          type === "list" ? <UnorderedListOutlined style={{ fontSize: "16px" }} /> : <FolderOutlined style={{ fontSize: "16px" }} />,
        ),
      ]);
    });

    return () => Subscription.unsubscribe();
  }, []);

  const onSelect: MenuProps["onSelect"] = (a) => {
    console.log(a);

    // currentGroupSubject.next(Math.floor(Math.random() * 100));
  };

  return (
    <div className="menu flex1 scrollbar__w1">
      <AntdMenu onSelect={onSelect} style={{ width: 220 }} mode="inline" items={menuList} />
    </div>
  );
}
