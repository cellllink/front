import { PlusCircleOutlined, DoubleRightOutlined, DoubleLeftOutlined, FolderOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { getMenuItem } from "@share/util/antd.util";
import { AddViewModal } from "./addViewModal";

export default function View() {
  const [menuList, setMenuList] = useState<ItemType[]>([
    getMenuItem(
      "系统视图",
      "systemView",
      <FolderOutlined style={{ fontSize: "16px" }} />,
      [getMenuItem("Option 1", "1"), getMenuItem("Option 2", "2")],
      "group"
    ),
    getMenuItem(
      "用户视图",
      "customView",
      <FolderOutlined style={{ fontSize: "16px" }} />,
      [getMenuItem("Option 3", "3"), getMenuItem("Option 4", "4")],
      "group"
    ),
  ]);

  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const onOpenAddModal = () => {
    setShowAddModal(true);
  };

  const onClsoeAddModal = () => {
    setShowAddModal(false);
  };

  const onClick = () => {};

  return (
    <>
      <div className="view br_r" style={{ width: "160px" }}>
        <div className="view-list">
          <Menu onClick={onClick} style={{ width: 159 }} mode="inline" items={menuList} />
        </div>

        <div>
          <div className="row_c_sb pd-h_8 br_t cs_p" style={{ height: "48px" }}>
            <div className="row-v_c" onClick={onOpenAddModal}>
              <PlusCircleOutlined className="fs_20" />
              <span className="flex1 mg-l_8 fs_16 lh_24">新建视图</span>
            </div>
            <div className="hr pd-h_4">{!true ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}</div>
          </div>
        </div>
      </div>

      <AddViewModal show={showAddModal} close={onClsoeAddModal} />
    </>
  );
}
