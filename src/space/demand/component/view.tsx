import { Dropdown, MenuProps } from "antd";
import {
  TableOutlined,
  HolderOutlined,
  EllipsisOutlined,
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  CopyOutlined,
} from "@ant-design/icons";

import { useDemandStore } from "../demand.store";

export const View = () => {
  const { showView } = useDemandStore();

  const items: MenuProps["items"] = [
    {
      icon: <EditOutlined className="fs_16" />,
      label: "重命名",
      key: "rename",
    },
    {
      icon: <CopyOutlined />,
      label: "复制",
      key: "copy",
    },
    {
      type: "divider",
    },
    {
      label: "删除",
      icon: <DeleteOutlined />,
      danger: true,
      key: "delete",
    },
  ];

  return (
    <div className="view pd-r_8 scrollbar__w1 br_r" style={{ display: showView ? "block" : "none" }}>
      <div className="pd-b_4 br_b">
        <div className="mg-v_4 c_9">系统预设</div>
        {[1, 2, 3].map((i, index) => (
          <div className="row-v_sb pd-l_8 pd-v_4 br_8 cs_p hr" key={index}>
            <TableOutlined />
            <span className="pd-h_8 ellipsis_1" style={{ width: "132px" }}>
              爱仕达的爱爱爱仕达211
            </span>
          </div>
        ))}
      </div>

      <div>
        <div className="row_c_sb mg-v_4">
          <div className="c_9">自定义视图</div>
          <div className="pd-h_4 pd-v_3 br_4 cs_p hr">
            <PlusOutlined className="fs_14" />
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8].map((i, index) => (
          <div className="row-v_c cs_p" key={index}>
            <HolderOutlined className="fs_16 c_9" />
            <div className="flex1 row-v_sb pd-h_8 pd-v_4 br_8 hr">
              <TableOutlined />
              <span className="pd-l_8 pd-r_4 ellipsis_1" style={{ width: "88px" }}>
                氨基酸氨基酸
              </span>
              <Dropdown menu={{ items }} trigger={["click"]} arrow={{ pointAtCenter: true }}>
                <EllipsisOutlined className="pd-h_2 fs_16 br_4 hr" />
              </Dropdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
