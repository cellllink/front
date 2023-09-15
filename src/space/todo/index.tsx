import React from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { getMenuItem } from "../../share/util/antd.util";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuProps["items"] = [
  getMenuItem("Navigation One", "sub1", <MailOutlined />, [
    getMenuItem("Option 1", "1"),
    getMenuItem("Option 2", "2"),
    getMenuItem("Option 3", "3"),
    getMenuItem("Option 4", "4"),
  ]),

  getMenuItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getMenuItem("Option 5", "5"),
    getMenuItem("Option 6", "6"),
    getMenuItem("Submenu", "sub3", null, [
      getMenuItem("Option 7", "7", null, [getMenuItem("Option 91", "91"), getMenuItem("Option 101", "101")]),
      getMenuItem("Option 8", "8"),
    ]),
  ]),

  getMenuItem("Navigation Three", "sub4", <SettingOutlined />, [
    getMenuItem("Option 9", "9"),
    getMenuItem("Option 10", "10"),
    getMenuItem("Option 11", "11"),
    getMenuItem("Option 12", "12"),
  ]),
  getMenuItem("Option 13", "13"),
  getMenuItem("Option 14", "14"),
];
export default function Todo() {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <div className="full row">
      <div className="full_y pt_r">
        <Menu
          onClick={onClick}
          style={{ width: 256, height: "100%" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
        <div className="pt_a b_0 l_0 pd-h_8 pd-v_4">123</div>
      </div>
      <div className="flex1">asd</div>
      <div style={{ width: 380, height: "100%" }}>123</div>
    </div>
  );
}
