import { Dropdown, MenuProps } from "antd";

import { getMenuItem } from "@share/util/antd.util";
import { GroupSwr } from "@share/swr/group.swr";

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
  const { trigger: createTrigger, isMutating: createIsMutating } = GroupSwr.create();

  const onAddClick: MenuProps["onClick"] = ({ key }) => {};

  return (
    <Dropdown menu={{ items: AddDropdownMenus, onClick: onAddClick }} trigger={["click"]}>
      <div className="pd_4 row_c_c hr">
        <span className="google-icon fs_16">add</span>
      </div>
    </Dropdown>
  );
}
