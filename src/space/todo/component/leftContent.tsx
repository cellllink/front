import { getMenuItem } from "@share/util/antd.util";
import { Dropdown } from "antd";
import { useState } from "react";

function SystemDefault() {
  return (
    <div className="column row-gap_4">
      {[
        { name: "我的一天", key: "sunny" },
        { name: "十分重要", key: "flag" },
        { name: "收集箱", key: "box" },
      ].map((item) => (
        <div className="row-v_c pd-h_8 pd-v_4 br_4 br hr" key={item.key}>
          <span className="google-icon fs_16 mg-r_4">{item.key}</span>
          {item.name}
        </div>
      ))}
    </div>
  );
}

function Completed() {
  return (
    <div className="column row-gap_4">
      {[
        { name: "已完成", key: "check_box" },
        { name: "已放弃", key: "disabled_by_default" },
        { name: "垃圾箱", key: "delete" },
      ].map((item) => (
        <div className="row-v_c pd-h_8 pd-v_4 br_4 br hr" key={item.key}>
          <span className="google-icon fs_16 mg-r_4">{item.key}</span>
          {item.name}
        </div>
      ))}
    </div>
  );
}

interface CustomGroupProp {
  isChild: boolean;
}
export function CustomGroup({ isChild }: CustomGroupProp) {
  const [open, setOpen] = useState(false);
  const GroupDropdownMenus = [getMenuItem("编辑", "edit"), getMenuItem("删除", "remove")];
  const onMoreVertClick = () => {};

  const MoreVert = (
    <Dropdown menu={{ items: GroupDropdownMenus, onClick: onMoreVertClick }} trigger={["click"]}>
      <span className="google-icon pd_2 fs_16 hr">more_vert</span>
    </Dropdown>
  );

  return (
    <Dropdown menu={{ items: GroupDropdownMenus, onClick: onMoreVertClick }} trigger={["contextMenu"]}>
      <div className={"pd_4 br_4 hr row_c_sb " + (isChild && "mg-l_16")}>
        {!isChild && (
          <span className="google-icon fs_16" onClick={() => setOpen(!open)}>
            {open ? "keyboard_arrow_down" : "keyboard_arrow_right"}
          </span>
        )}
        <span className="google-icon mg-r_4 fs_16">menu</span>
        <span className="flex_1">氨基酸打酸啊酸啊</span>
        {MoreVert}
      </div>
    </Dropdown>
  );
}

export function CustomGroupList() {
  return (
    <div className="flex_1 mg-t_4">
      <div className="pd_4 br_4 row_c_sb">
        <span className="fs_10 c_6">自定义分组</span>
        <span className="google-icon pd_2 fs_16 hr">add</span>
      </div>

      <CustomGroup isChild={false} />
      <CustomGroup isChild={true} />
      <CustomGroup isChild={true} />
      <CustomGroup isChild={true} />

      <CustomGroup isChild={false} />
      <CustomGroup isChild={true} />
      <CustomGroup isChild={true} />
    </div>
  );
}

interface LeftContentProp {}
export function LeftContent({}: LeftContentProp) {
  return (
    <div className="w_180 min-w_180 h_100% column pd_4 br_r">
      <SystemDefault />
      <CustomGroupList />
      <div className="mg-b_4 br_b"></div>
      <Completed />
    </div>
  );
}
