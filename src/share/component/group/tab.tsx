import { Dropdown } from "antd";

import { GroupPo } from "@share/swr/group.swr.ts";
import { getMenuItem } from "@share/util/antd.util.ts";

const GroupDropdownMenus = [getMenuItem("创建副本", "copy"), getMenuItem("重命名", "rename"), getMenuItem("删除", "remove")];

interface IGroupProp {
  group: GroupPo;
  isCurrent: boolean;
  isLast: boolean;
  onChangeCurrentGroupId: (groupId: number) => void;
  onMoreVertClick: (key: string) => void;
}
export function Tab({ group, isCurrent, isLast, onChangeCurrentGroupId, onMoreVertClick }: IGroupProp) {
  const MoreVert = (
    <Dropdown menu={{ items: GroupDropdownMenus, onClick: onMoreVertClick }} trigger={["click"]}>
      <div className="row_c_c mg-l_2 pd-v_2 hr">
        <span className="google-icon fs_14">more_vert</span>
      </div>
    </Dropdown>
  );

  return (
    <Dropdown menu={{ items: GroupDropdownMenus, onClick: ({ key }) => onMoreVertClick(key) }} trigger={["contextMenu"]}>
      <div
        className={["row-v_c pd-v_2 pd-h_4 bg_ffffff br_4 hr", isCurrent && "hred", !isLast && "mg-r_4"].join(" ")}
        onClick={() => onChangeCurrentGroupId(group.id)}
      >
        <span className="google-icon fs_16 mg-r_4">table_chart</span>
        {group.name}
        {isCurrent && MoreVert}
      </div>
    </Dropdown>
  );
}
