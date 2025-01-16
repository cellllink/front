import { Dropdown } from "antd";

import { getMenuItem } from "@share/util/antd.util";

const AddDropdownMenus = [
  getMenuItem(
    <div className="row-v_c">
      <span className="google-icon mg-r_4 fs_16">table_chart</span>表格视图
    </div>,
    "table",
  ),
  getMenuItem(
    <div className="row-v_c">
      <span className="google-icon mg-r_4 fs_16">view_column</span>看板视图
    </div>,
    "board",
  ),
];

export function Add() {
  return (
    <Dropdown menu={{ items: AddDropdownMenus }} trigger={["click"]}>
      <div className="pd_4 row_c_c hr">
        <span className="google-icon fs_16">add</span>
      </div>
    </Dropdown>
  );
}
