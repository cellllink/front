import { ChangeEvent, useState } from "react";
import { Dropdown, Input, MenuProps, Typography } from "antd";

import { GroupPo, GroupSwr } from "@share/swr/group.swr.ts";
import { getMenuItem } from "@share/util/antd.util.ts";

const GroupDropdownMenus = [getMenuItem("创建副本", "copy"), getMenuItem("重命名", "rename"), getMenuItem("删除", "remove")];

interface IGroupProp {
  group: GroupPo;
  isCurrent: boolean;
  onChangeCurrentGroupId: (groupId: number) => void;
  onMoreVertClick: (key: string) => void;
}
export function Tab({ group, isCurrent, onChangeCurrentGroupId, ...rest }: IGroupProp) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newGroupName, setNewGroupName] = useState(group.name);
  const { trigger: editTrigger, isMutating: editIsMutating } = GroupSwr.edit();

  const onMoreVertClick: MenuProps["onClick"] = ({ domEvent, key }) => {
    domEvent.stopPropagation();
    domEvent.nativeEvent.stopImmediatePropagation();

    if (key === "rename") {
      setIsEditMode(true);
      return;
    }

    rest.onMoreVertClick(key);
  };
  const cancelEdit = () => {
    setNewGroupName(group.name);
    setIsEditMode(false);
  };
  const onEditInputBlur = () => {
    if (!newGroupName || !newGroupName.trim() || newGroupName.trim() === group.name) {
      cancelEdit();
      return;
    }

    setIsEditMode(false);
    editTrigger({ params: { owner_uuid: group.owner_uuid, id: group.id, name: newGroupName.trim() } }).then(() =>
      rest.onMoreVertClick("rename"),
    );
  };
  const onEditInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewGroupName(e.target.value);
  };

  const MoreVert = (
    <Dropdown menu={{ items: GroupDropdownMenus, onClick: onMoreVertClick }} trigger={["click"]}>
      <div className="row_c_c mg-l_2 pd-v_2 hr">
        <span className="google-icon fs_14">more_vert</span>
      </div>
    </Dropdown>
  );

  return (
    <Dropdown menu={{ items: GroupDropdownMenus, onClick: onMoreVertClick }} trigger={["contextMenu"]}>
      <div
        className={["row-v_c mg-r_4 pd-v_2 pd-h_4 bg_ffffff br_4 hr", isCurrent && "hred"].join(" ")}
        onClick={() => onChangeCurrentGroupId(group.id)}
      >
        <span className="google-icon fs_16 mg-r_4">table_chart</span>
        {isEditMode ? (
          <Input
            placeholder="请输入"
            variant="borderless"
            className="w_100 pd_0"
            autoFocus
            value={newGroupName}
            onChange={onEditInputChange}
            onBlur={onEditInputBlur}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              onEditInputBlur();
            }}
          />
        ) : (
          <>
            <Typography.Paragraph ellipsis className="max-w_120" style={{ marginBottom: 0 }} title={newGroupName}>
              {newGroupName}
            </Typography.Paragraph>
            {isCurrent && MoreVert}
          </>
        )}
      </div>
    </Dropdown>
  );
}
